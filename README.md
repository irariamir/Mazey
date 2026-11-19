<div align="center">

# مازی

یک جزیرهٔ کوچک برای ویندوز. بالای صفحه می‌نشیند، آهنگ را نشان می‌دهد، نوتیفیکیشن می‌گیرد، کپی را یادش می‌ماند و فایل نگه می‌دارد.

برای بچه‌های [گروه آموزشی ماز](https://biomaze.ir).

[![ویدیو معرفی مازی](docs/hero.jpg)](https://drive.google.com/file/d/1nKa4eej2rFJGPxn4VIomzGkv7oz8TdwW/view)

[پخش ویدیو — ۴۸ ثانیه](https://drive.google.com/file/d/1nKa4eej2rFJGPxn4VIomzGkv7oz8TdwW/view)

</div>

<div dir="rtl">

## دانلود — نسخه ۱.۰.۳

فایل‌ها در [Releases](https://github.com/irariamir/Mazey/releases/latest) هستند. **Latest** الان ۱.۰.۳ است.

- **[Mazey-Setup.exe](https://github.com/irariamir/Mazey/releases/latest/download/Mazey-Setup.exe)** — نصب معمولی. فقط همین کاربر، بدون Admin. بیشتر افراد همین را بردارند.
- **[Mazey-Portable.exe](https://github.com/irariamir/Mazey/releases/latest/download/Mazey-Portable.exe)** — نصب نمی‌خواهد؛ مستقیم اجرا می‌شود.
- **[Mazey-Windows.zip](https://github.com/irariamir/Mazey/releases/latest/download/Mazey-Windows.zip)** — خودِ برنامه داخل زیپ.

ویندوز ۱۰ یا ۱۱، با WebView2 (روی ویندوز ۱۱ هست). اگر SmartScreen آمد: More info → Run anyway.

اگر نسخهٔ قدیمی‌تر نصب است، از منوی مازی **بررسی آپدیت** را بزن.

### چه چیزی عوض شد

- **۱.۰.۳** حرکت جزیره نرم‌تر شد؛ آپدیت داخل برنامه امضا می‌شود.
- **۱.۰.۲** لینک بعد از آپدیت درست شد؛ تنظیمات برنامه قاطی نمی‌شود؛ راهنمای دکمهٔ ماز با رفتار واقعی یکی است.
- **۱.۰.۱** ساعت حدود ۱۰ ثانیه باز می‌ماند؛ نصب‌کننده انگلیسی است؛ بررسی آپدیت به همین ریپو وصل شد.

## امکانات

- پخش موزیک: اسم، کاور، قبلی و بعدی. فیلم و بازی تمام‌صفحه را ول می‌کند.
- نوتیفیکیشن یک خط. بزن، همان چت باز می‌شود.
- کپی هوشمند: لینک، حساب، تاریخ شمسی و میلادی.
- فایل را روی جزیره رها کن؛ همان‌جا می‌ماند.
- یادداشت سریع با `Ctrl+Alt+N`. اگر زمان توی متن باشد، یادآور می‌شود.
- رمز می‌سازد و با حساب ویندوز قفل می‌کند.
- خواندن متن صفحه با `Ctrl+Alt+T`. فارسی و انگلیسی.
- تایمر درس تا آخر روی صفحه می‌ماند.
- دکمهٔ ماز یک جمله می‌گوید و بعد از حدود ۱۰ ثانیه می‌رود.
- تم پیش‌فرض اورست است. تم آریامیر هم هست.
- نقطه وقتی میکروفون یا دوربین روشن است؛ خط وقتی نت یا VPN عوض می‌شود.

## حریم خصوصی

به اینترنت وصل نمی‌شود، مگر برای دیدن نسخهٔ جدید همین ریپو. آن را هم می‌شود خاموش کرد. نوتیفیکیشن و رمز و کپی روی سیستم خودت می‌مانند.

## سازنده

من آریامیر، دانش‌آموز دوازدهم ریاضی هستم.

ماز می‌خوانم. مازی را نوشتم تا سر درس روی لپ‌تاپ هم باشد.

[ariamir.ct.ws](http://ariamir.ct.ws) · [@Ariamir_academy](https://t.me/Ariamir_academy) · [@ariamir_ir](https://t.me/ariamir_ir)

## ساختن

Rust و NSIS لازم است. از ریشهٔ ریپو:

```
cd src-tauri
cargo build --release
cd ..
makensis /DVERSION=1.0.3 installer/island.nsi
```

هر پوش روی [Actions](.github/workflows/build.yml) بیلد می‌شود. تگ `vX.Y.Z` ریلیز می‌کند.

مجوز [MIT](LICENSE). Tesseract فارسی داخل برنامه است (Apache 2.0).

</div>
