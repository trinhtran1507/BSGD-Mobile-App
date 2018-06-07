package com.heng.wheel;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.Typeface;
import android.os.Handler;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.view.View;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.RCTEventEmitter;

import java.util.List;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;

public class LoopView extends View {

    public enum ACTION {
        CLICK, FLING, DRAG
    }

    Context context;

    Handler handler;
    private GestureDetector gestureDetector;
    OnItemSelectedListener onItemSelectedListener;

    ScheduledExecutorService mExecutor = Executors.newSingleThreadScheduledExecutor();
    private ScheduledFuture<?> mFuture;

    Paint paintOuterText;
    Paint paintCenterText;
    Paint paintIndicator;

    List<String> items;

    int maxTextWidth;

    int maxTextHeight;
    int colorGray = 0xffafafaf;
    int colorDarkBlue = 0xff1F4F87;

    int colorLightBlue= 0xff3177CA;

    float lineSpacingMultiplier;


    int firstLineY;
    int secondLineY;

    int totalScrollY;
    int selectedItem;
    int preCurrentIndex;
    int change;

    final boolean DEFAULT_IS_LOOP = true;

    final int DEFAULT_VISIBLE_COUNT = 9;

    final int DEFAULT_SELECTED_INDEX = 0;

    final int DEFAULT_TEXT_SIZE = 16;

    boolean isLoop = DEFAULT_IS_LOOP;

    int itemsVisible = DEFAULT_VISIBLE_COUNT;

    int selectedIndex;

    int textSize;

    int mViewHeight;
    int mViewWidth;

    int halfCircumference;
    int radius;

    private int mOffset = 0;
    private float previousY;
    long startTime = 0;

    private int mVelocityFling;

    public LoopView(Context context) {
        super(context);
        initLoopView(context);
    }

    private void initLoopView(Context context) {
        this.context = context;
        handler = new MessageHandler(this);
        gestureDetector = new GestureDetector(context, new LoopViewGestureListener(this));
        gestureDetector.setIsLongpressEnabled(false);

        lineSpacingMultiplier = 2.0F;

        totalScrollY = 0;
        selectedIndex = DEFAULT_SELECTED_INDEX;

        initPaints();

        setTextSize(DEFAULT_TEXT_SIZE);

        mVelocityFling = 20;
    }

    private void initPaints() {
        
        Typeface custom_font = Typeface.createFromAsset(context.getAssets(),  "fonts/Adelle-Sans-Regular.ttf");
        
        paintOuterText = new Paint();
        paintOuterText.setColor(colorGray);
        paintOuterText.setAntiAlias(true);
        paintOuterText.setTextAlign(Paint.Align.CENTER);
        paintOuterText.setTypeface(custom_font);

        paintCenterText = new Paint();
        paintCenterText.setColor(colorDarkBlue);
        paintCenterText.setAntiAlias(true);
        paintCenterText.setTextScaleX(1.00F);
        paintCenterText.setTextAlign(Paint.Align.CENTER);
        paintCenterText.setTypeface(custom_font);

        paintIndicator = new Paint();
        paintIndicator.setColor(colorLightBlue);
        paintIndicator.setAntiAlias(true);

        if (android.os.Build.VERSION.SDK_INT >= 11) {
            setLayerType(LAYER_TYPE_SOFTWARE, null);
        }
    }

    @Override
    protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
        super.onMeasure(widthMeasureSpec, heightMeasureSpec);
        remeasure();
        mViewWidth = getMeasuredWidth();
        setMeasuredDimension(mViewWidth, mViewHeight);
    }

    private void remeasure() {
        if (items == null) {
            return;
        }

        measureTextWidthHeight();

        halfCircumference = (int) (maxTextHeight * lineSpacingMultiplier * (itemsVisible - 1));
        mViewHeight = (int) ((halfCircumference * 2) / Math.PI);
        radius = (int) (halfCircumference / Math.PI);
        firstLineY = (int) ((mViewHeight - lineSpacingMultiplier * maxTextHeight) / 2.0F);
        secondLineY = (int) ((mViewHeight + lineSpacingMultiplier * maxTextHeight) / 2.0F);
        if (selectedIndex == -1) {
            if (isLoop) {
                selectedIndex = (items.size() + 1) / 2;
            } else {
                selectedIndex = 0;
            }
        }

        preCurrentIndex = selectedIndex;
    }

    private void measureTextWidthHeight() {
        Rect rect = new Rect();
        for (int i = 0; i < items.size(); i++) {
            String s1 = items.get(i);
            paintCenterText.getTextBounds(s1, 0, s1.length(), rect);
            int textWidth = rect.width();
            if (textWidth > maxTextWidth) {
                maxTextWidth = textWidth;
            }
            int textHeight = rect.height();
            if (textHeight > maxTextHeight) {
                maxTextHeight = textHeight;
            }
        }
    }

    @Override
    protected void onDraw(Canvas canvas) {
        if (items == null) {
            return;
        }

        String as[] = new String[itemsVisible];
        change = (int) (totalScrollY / (lineSpacingMultiplier * maxTextHeight));
        preCurrentIndex = selectedIndex + change % items.size();
        if (!isLoop) {
            if (preCurrentIndex < 0) {
                preCurrentIndex = 0;
            }
            if (preCurrentIndex > items.size() - 1) {
                preCurrentIndex = items.size() - 1;
            }
        } else {
            if (preCurrentIndex < 0) {
                preCurrentIndex = items.size() + preCurrentIndex;
            }
            if (preCurrentIndex > items.size() - 1) {
                preCurrentIndex = preCurrentIndex - items.size();
            }
        }

        int j2 = (int) (totalScrollY % (lineSpacingMultiplier * maxTextHeight));
        // 设置as数组中每个元素的值
        int k1 = 0;
        while (k1 < itemsVisible) {
            int l1 = preCurrentIndex - (itemsVisible / 2 - k1);
            if (isLoop) {
                if (l1 < 0) {
                    l1 = l1 + items.size();
                }
                if (l1 > items.size() - 1) {
                    l1 = l1 - items.size();
                }
                as[k1] = items.get(l1);
            } else if (l1 < 0) {
                as[k1] = "";
            } else if (l1 > items.size() - 1) {
                as[k1] = "";
            } else {
                as[k1] = items.get(l1);
            }
            k1++;
        }
        canvas.drawLine(0.0F, firstLineY, mViewWidth, firstLineY, paintIndicator);
        canvas.drawLine(0.0F, secondLineY, mViewWidth, secondLineY, paintIndicator);
        int j1 = 0;
        while (j1 < itemsVisible) {
            canvas.save();
            // L(弧长)=α（弧度）* r(半径) （弧度制）
            // 求弧度--> (L * π ) / (π * r)   (弧长X派/半圆周长)
            float itemHeight = maxTextHeight * lineSpacingMultiplier;
            double radian = ((itemHeight * j1 - j2) * Math.PI) / halfCircumference;
            // 弧度转换成角度(把半圆以Y轴为轴心向右转90度，使其处于第一象限及第四象限
            float angle = (float) (90D - (radian / Math.PI) * 180D);
            if (angle >= 90F || angle <= -90F) {
                canvas.restore();
            } else {
                int translateY = (int) (radius - Math.cos(radian) * radius - (Math.sin(radian) * maxTextHeight) / 2D);
                canvas.translate(0.0F, translateY);
                canvas.scale(1.0F, (float) Math.sin(radian));
                String text = as[j1];
                if (translateY <= firstLineY && maxTextHeight + translateY >= firstLineY) {
                    // 条目经过第一条线
                    canvas.save();
                    canvas.clipRect(0, 0, mViewWidth, firstLineY - translateY);
                    canvas.drawText(text, getXY(paintOuterText)[0] , getXY(paintOuterText)[1], paintOuterText);
                    canvas.restore();
                    canvas.save();
                    canvas.clipRect(0, firstLineY - translateY, mViewWidth, (int) (itemHeight));
                    canvas.drawText(text, getXY(paintCenterText)[0] , getXY(paintCenterText)[1], paintCenterText);
                    canvas.restore();
                } else if (translateY <= secondLineY && maxTextHeight + translateY >= secondLineY) {
                    // 条目经过第二条线
                    canvas.save();
                    canvas.clipRect(0, 0, mViewWidth, secondLineY - translateY);
                    canvas.drawText(text, getXY(paintCenterText)[0] , getXY(paintCenterText)[1], paintCenterText);
                    canvas.restore();
                    canvas.save();
                    canvas.clipRect(0, secondLineY - translateY, mViewWidth, (int) (itemHeight));
                    canvas.drawText(text, getXY(paintOuterText)[0] , getXY(paintOuterText)[1], paintOuterText);
                    canvas.restore();
                } else if (translateY >= firstLineY && maxTextHeight + translateY <= secondLineY) {
                    // 中间条目
                    canvas.clipRect(0, 0, mViewWidth, (int) (itemHeight));
                    canvas.drawText(text, getXY(paintCenterText)[0] , getXY(paintCenterText)[1], paintCenterText);
                    selectedItem = items.indexOf(as[j1]);
                } else {
                    // 其他条目
                    canvas.clipRect(0, 0, mViewWidth, (int) (itemHeight));
                    canvas.drawText(text, getXY(paintOuterText)[0] , getXY(paintOuterText)[1], paintOuterText);
                }
                canvas.restore();
            }
            j1++;
        }
    }

    private float[] getXY(Paint paint) {
        float [] xy = new float[2];
        xy[0] = mViewWidth / 2;

        Rect rect = new Rect(0, 0, getWidth(), maxTextHeight);
        RectF bounds = new RectF();
        bounds.bottom = paint.descent() - paint.ascent();
        bounds.top += (rect.height() - bounds.bottom) / 2.0f;
        xy[1] = bounds.top - paint.ascent();
        return xy;
    }

    @Override
    public boolean onTouchEvent(MotionEvent event) {
        boolean eventConsumed = gestureDetector.onTouchEvent(event);
        float itemHeight = lineSpacingMultiplier * maxTextHeight;

        switch (event.getAction()) {
            case MotionEvent.ACTION_DOWN:
                startTime = System.currentTimeMillis();
                cancelFuture();
                previousY = event.getRawY();
                if (getParent() != null) {
                    getParent().requestDisallowInterceptTouchEvent(true);
                }
                break;

            case MotionEvent.ACTION_MOVE:
                float dy = previousY - event.getRawY();
                previousY = event.getRawY();

                totalScrollY = (int) (totalScrollY + dy);

                if (!isLoop) {
                    float top = -selectedIndex * itemHeight;
                    float bottom = (items.size() - 1 - selectedIndex) * itemHeight;

                    if (totalScrollY < top) {
                        totalScrollY = (int) top;
                    } else if (totalScrollY > bottom) {
                        totalScrollY = (int) bottom;
                    }
                }
                break;

            case MotionEvent.ACTION_UP:
            case MotionEvent.ACTION_CANCEL:
            default:
                if (!eventConsumed) {
                    float y = event.getY();
                    double l = Math.acos((radius - y) / radius) * radius;
                    int circlePosition = (int) ((l + itemHeight / 2) / itemHeight);

                    float extraOffset = (totalScrollY % itemHeight + itemHeight) % itemHeight;
                    mOffset = (int) ((circlePosition - itemsVisible / 2) * itemHeight - extraOffset);

                    if ((System.currentTimeMillis() - startTime) > 120) {
                        smoothScroll(ACTION.DRAG);
                    } else {
                        smoothScroll(ACTION.CLICK);
                    }
                }
                if (getParent() != null) {
                    getParent().requestDisallowInterceptTouchEvent(false);
                }
                break;
        }

        invalidate();
        return true;
    }

    void smoothScroll(ACTION action) {
        cancelFuture();
        if (action == ACTION.FLING || action == ACTION.DRAG) {
            float itemHeight = lineSpacingMultiplier * maxTextHeight;
            mOffset = (int) ((totalScrollY % itemHeight + itemHeight) % itemHeight);
            if ((float) mOffset > itemHeight / 2.0F) {
                mOffset = (int) (itemHeight - (float) mOffset);
            } else {
                mOffset = -mOffset;
            }
        }
        mFuture = mExecutor.scheduleWithFixedDelay(new SmoothScrollTimerTask(this, mOffset), 0, 10, TimeUnit.MILLISECONDS);
    }

    protected final void scrollBy(float velocityY) {
        cancelFuture();
        mFuture = mExecutor.scheduleWithFixedDelay(new InertiaTimerTask(this, velocityY), 0, mVelocityFling, TimeUnit.MILLISECONDS);
    }

    public void cancelFuture() {
        if (mFuture != null && !mFuture.isCancelled()) {
            mFuture.cancel(true);
            mFuture = null;
        }
    }

    public void isLoop(boolean isLoop) {
        this.isLoop = isLoop;
    }

    public void setTextSize(float size) {
        if (size > 0.0F) {
            textSize = (int) (context.getResources().getDisplayMetrics().density * size);
            paintOuterText.setTextSize(textSize);
            paintCenterText.setTextSize(textSize);
        }
    }

    public void setItemsVisible(int itemsVisible) {
        this.itemsVisible = itemsVisible + 2;
    }

    public void setSelectedIndex(int selectedIndex) {
        this.selectedIndex = selectedIndex;
    }

    public void setVelocityFling(int velocityFling) {
        this.mVelocityFling = velocityFling;
    }

    public void onReceiveNativeEvent(int index) {
        WritableMap event = Arguments.createMap();
        event.putInt("index", index);
        ReactContext reactContext = (ReactContext) getContext();
        reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                getId(),
                "topChange",
                event);
    }

    public void setListener(OnItemSelectedListener OnItemSelectedListener) {
        this.onItemSelectedListener = OnItemSelectedListener;
    }

    public void setItems(List<String> items) {
        this.items = items;
        remeasure();
        invalidate();
    }


    public final int getSelectedIndex() {
        return selectedItem;
    }

    public String getSelectedItem() {
        return items.get(selectedItem);
    }

    protected final void onItemSelected() {
        if (onItemSelectedListener != null) {
            postDelayed(new OnItemSelectedRunnable(this), 200L);
        }
    }
}
