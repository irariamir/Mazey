<div align="center">

# مازِی

**یک جزیرهٔ کوچک و زنده برای ویندوز — برای بچه‌های ماز.**  
قرص بالای صفحه که آهنگ، نوتیفیکیشن، کپی، فایل و تایمر درس را نگه می‌دارد. هر بار که نگاهش می‌کنی، یاد مسیر می‌افتی.

[![release](https://img.shields.io/github/v/release/irariamir/Mazey?label=release&color=555)](https://github.com/irariamir/Mazey/releases/latest)
[![downloads](https://img.shields.io/github/downloads/irariamir/Mazey/total?label=downloads&color=555)](https://github.com/irariamir/Mazey/releases)
[![build](https://img.shields.io/github/actions/workflow/status/irariamir/Mazey/build.yml?branch=main&label=build)](https://github.com/irariamir/Mazey/actions/workflows/build.yml)
[![license](https://img.shields.io/badge/license-MIT-555)](LICENSE)

[![نصب‌کننده ویندوز](https://img.shields.io/badge/WINDOWS-INSTALLER-1A6CFF?style=for-the-badge)](https://github.com/irariamir/Mazey/releases/latest/download/Mazey-Setup.exe)
[![نسخهٔ پرتابل](https://img.shields.io/badge/WINDOWS-PORTABLE%20.EXE-1f2328?style=for-the-badge)](https://github.com/irariamir/Mazey/releases/latest/download/Mazey-Portable.exe)
[![فایل zip](https://img.shields.io/badge/WINDOWS-.ZIP-1f2328?style=for-the-badge)](https://github.com/irariamir/Mazey/releases/latest/download/Mazey-Windows.zip)

</div>

<div dir="rtl">

## داستان

من دانش‌آموز **دوازدهم ریاضی**ام. ماز مسیر درس است؛ من می‌خواهم چیزی **بزرگ‌تر از ماز** بسازم — ابزاری که وقتی بالای لپ‌تاپ می‌نشیند، تو را برمی‌گرداند سر قله.

**مازِی** همان جزیره است. برای [گروه آموزشی ماز](https://biomaze.ir). ساختهٔ کارگاه **[ARIAMIR](http://ariamir.ct.ws)**.

> با اطمینان بساز. اعتماد در هر لایه.  
> دنیا زیر یک برند.

اسکلت رفتار از [Peeky](https://github.com/raminturne/peeky) است (MIT). هویت، تم اورست، لوگوی ilo، فارسی و مسیر ماز مال این پروژه است.

---

## مازِی چه می‌کند

- **چشم زنده.** پلک می‌زند، نگاه می‌کند، بیدار است — مثل یک همراه کوچک بالای صفحه.
- **پخش موزیک.** نام، خواننده، کاور، کنترل و نوار پیشرفت. با فیلم و بازی تمام‌صفحه کاری ندارد.
- **تم اورست ماز.** پس‌زمینه مثل کارت‌های سایت ماز. تم پیش‌فرض.
- **تم آریامیر.** مشکی برندبوک، سبز `#3ECF8E` / `#006239`.
- **نوتیفیکیشن یک خط.** کلیک همان چت را باز می‌کند. وقتی منو باز است، کنار جزیره منتظر می‌ماند.
- **کپی هوشمند.** لینک، حساب، تاریخ میلادی ⇄ شمسی.
- **قفسهٔ فایل.** فایل را روی جزیره رها کن؛ تا پنج تا می‌ماند تا بیرونشان بکشی.
- **یادداشت سریع.** `Ctrl+Alt+N`. اگر زمان در متن باشد («۱۰ دقیقه دیگه زیست») یادآور می‌شود.
- **رمزها.** می‌سازد، سایت را می‌پرسد، با حساب ویندوز رمزنگاری می‌کند. کپی بعد از 30s پاک می‌شود.
- **خواندن متن.** `Ctrl+Alt+T`، دور متن کادر بکش. فارسی و انگلیسی. چیزی از سیستم خارج نمی‌شود.
- **تایمر درس.** تا تهش روی صفحه می‌ماند — حتی روی تمام‌صفحه.
- **دکمهٔ ماز.** یک جملهٔ انگیزشی کوتاه، حدود ۱۰ ثانیه، بعد می‌رود.
- **تنظیمات داخل خود جزیره.** پنجرهٔ اضافه نیست.

بار اول، مازِی سلام می‌کند و فهرست کارهایی که بلدد را نشان می‌دهد.

---

## نصب

ویندوز ۱۰ یا ۱۱ + WebView2 (روی ویندوز ۱۱ هست).

1. **[Mazey-Setup.exe](https://github.com/irariamir/Mazey/releases/latest/download/Mazey-Setup.exe)** را دانلود کن.
2. اجرا کن. **فقط برای همین کاربر** نصب می‌شود — Admin نمی‌خواهد.
3. خودش باز می‌شود. از تنظیمات می‌توانی بگویی با ویندوز بیاید.

نصب‌کننده امضای تجاری ندارد؛ SmartScreen یک بار ممکن است بپرسد. Continue / Run anyway.

بدون نصب: **[Mazey-Portable.exe](https://github.com/irariamir/Mazey/releases/latest/download/Mazey-Portable.exe)**

اگر ریلیز هنوز آماده نبود، از [Actions](https://github.com/irariamir/Mazey/actions) آخرین بیلد ویندوز را بگیر.

---

## دسترسی‌ها — عین Peeky

نصب‌کننده مجوز جدا نمی‌گیرد. برنامه بعد از اجرا، مثل Peeky، از API خود ویندوز استفاده می‌کند:

| چه | چرا |
| --- | --- |
| نوتیفیکیشن | همان خط روی جزیره |
| کلیپ‌بورد | تاریخچه و کپی هوشمند |
| پخش سیستم | آهنگ در حال پخش |
| تری | آیکون کنار ساعت |
| فایل | قفسه |
| OCR | خواندن متن صفحه |
| DPAPI | رمزهای ذخیره‌شده |

شبکه فقط برای آپدیت از همین ریپو (می‌شود خاموشش کرد). نوتیفیکیشن، کپی، یادداشت و رمز روی سیستم خودت می‌مانند.

---

## برند

| | |
| --- | --- |
| محصول | **مازِی** / Mazey |
| برای | [گروه آموزشی ماز](https://biomaze.ir) |
| کارگاه | **ARIAMIR** — [ariamir.ct.ws](http://ariamir.ct.ws) |
| سازنده | دانش‌آموز دوازدهم ریاضی |
| کانال | [@Ariamir_academy](https://t.me/Ariamir_academy) |
| پیام | [@ariamir_ir](https://t.me/ariamir_ir) |
| سفارش | [@ARIAMIRBOT](https://t.me/ARIAMIRBOT) |

لوگوی برنامه: علامت **ilo** ماز.

---

## ساختن از سورس

روی ویندوز:

```
cd src-tauri
cargo build --release
```

نصب‌کننده:

```
makensis /DVERSION=1.0.0 installer/island.nsi
```

خروجی: `dist/Mazey-Setup.exe` — لوگوی ilo روی صفحهٔ خوش‌آمد نصب.

هر پوش با GitHub Actions روی ویندوز بیلد می‌شود. تگ `v1.0.0` ریلیز می‌کند.

## پیش‌نمایش مرورگر

از ریشهٔ ریپو:

```
python3 -m http.server 8765
```

بعد `ui/index.html` — رفتار جزیره، بدون API ویندوز.

## مجوز

[MIT](LICENSE). الهام از Peeky (MIT). OCR: tesseract.js (Apache 2.0).

</div>

---

<div align="center">

**مازِی** — از کارگاه ARIAMIR، برای مسیر ماز.  
چیزی بزرگ‌تر از ماز، از یک دانش‌آموز دوازدهم.

</div>
