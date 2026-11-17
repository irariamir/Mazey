<div align="center">

# مازِی

**یک جزیرهٔ کوچک برای ویندوز.** بالای صفحه می‌نشیند، آهنگ را نشان می‌دهد، نوتیفیکیشن می‌گیرد، کپی را یادش می‌ماند، فایل نگه می‌دارد و بین کارها پلک می‌زند.

برای بچه‌های [گروه آموزشی ماز](https://biomaze.ir).

[![release](https://img.shields.io/github/v/release/irariamir/Mazey?label=release&color=555)](https://github.com/irariamir/Mazey/releases/latest)
[![downloads](https://img.shields.io/github/downloads/irariamir/Mazey/total?label=downloads&color=555)](https://github.com/irariamir/Mazey/releases)
[![build](https://img.shields.io/github/actions/workflow/status/irariamir/Mazey/build.yml?branch=main&label=build)](https://github.com/irariamir/Mazey/actions/workflows/build.yml)
[![license](https://img.shields.io/badge/license-MIT-555)](LICENSE)

[![نصب ویندوز](https://img.shields.io/badge/دانلود-Mazey--Setup.exe-1A6CFF?style=for-the-badge)](https://github.com/irariamir/Mazey/releases/latest/download/Mazey-Setup.exe)
[![پرتابل](https://img.shields.io/badge/پرتابل-.exe-1f2328?style=for-the-badge)](https://github.com/irariamir/Mazey/releases/latest/download/Mazey-Portable.exe)
[![zip](https://img.shields.io/badge/zip-Windows-1f2328?style=for-the-badge)](https://github.com/irariamir/Mazey/releases/latest/download/Mazey-Windows.zip)

<img src="docs/hero.jpg" width="860" alt="مازِی">

</div>

<div dir="rtl">

## امکانات

- **پخش موزیک.** اسم آهنگ، خواننده، کاور و دکمه‌های کنترل. با فیلم و بازی تمام‌صفحه کاری ندارد.
- **نوتیفیکیشن یک خط.** بزن همان چت باز می‌شود. اگر مشغول جزیره باشی، کنارش منتظر می‌ماند.
- **کپی هوشمند.** لینک باز می‌شود، حساب جواب می‌گیرد، تاریخ میلادی و شمسی به هم تبدیل می‌شوند.
- **قفسهٔ فایل.** فایل را روی جزیره رها کن؛ تا وقتی لازم داری همان‌جا می‌ماند.
- **یادداشت.** از هر جا `Ctrl+Alt+N`. اگر توی متن زمان باشد («۱۰ دقیقه دیگه زیست») یادآور می‌شود.
- **رمز.** می‌سازد، می‌پرسد برای کجاست، با حساب ویندوز قفل می‌کند.
- **خواندن متن از صفحه.** `Ctrl+Alt+T`، دورش کادر بکش. فارسی و انگلیسی. از دستگاهت بیرون نمی‌رود.
- **تایمر درس.** تا آخر روی صفحه می‌ماند.
- **دکمهٔ ماز.** یک جملهٔ کوتاه می‌گوید و بعد از چند ثانیه می‌رود.
- **تم اورست** پیش‌فرض است. تم آریامیر هم هست.

بار اول که باز می‌شود، خودش نشان می‌دهد چه کارهایی ازش برمی‌آید.

## نصب

ویندوز ۱۰ یا ۱۱.

[Mazey-Setup.exe](https://github.com/irariamir/Mazey/releases/latest/download/Mazey-Setup.exe) را دانلود کن و باز کن. فقط برای همین کاربر نصب می‌شود، Admin نمی‌خواهد، بعد از نصب خودش بالا می‌آید.

ویندوز ممکن است یک بار SmartScreen نشان بدهد. Run anyway بزن.

بدون نصب: [Mazey-Portable.exe](https://github.com/irariamir/Mazey/releases/latest/download/Mazey-Portable.exe)

فایل‌ها در [Releases](https://github.com/irariamir/Mazey/releases/latest) هستند.

## حریم خصوصی

به اینترنت وصل نمی‌شود، مگر برای چک کردن نسخهٔ جدید همین ریپو. آن را هم می‌شود از تنظیمات خاموش کرد. نوتیفیکیشن، کپی، یادداشت و رمز روی سیستم خودت می‌مانند.

## سازنده

آریامیر. دانش‌آموز دوازدهم ریاضی.

ماز را که خواندم، دلم خواست روی لپ‌تاپ هم باشد. نه فقط توی سایت. مازِی را برای همین ساختم.

[ARIAMIR](http://ariamir.ct.ws) · [@Ariamir_academy](https://t.me/Ariamir_academy) · [@ariamir_ir](https://t.me/ariamir_ir)

## ساختن از سورس

```
cd src-tauri
cargo build --release
makensis /DVERSION=1.0.0 installer/island.nsi
```

[MIT](LICENSE). شکل جزیره از [Peeky](https://github.com/raminturne/peeky).

</div>
