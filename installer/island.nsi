; Mazey — same install model as Peeky: per-user, no admin, /S is silent (how updates arrive).
Unicode true
!include "MUI2.nsh"
!ifndef VERSION
  !define VERSION "1.0.0"
!endif
!define NAME "Mazey"
!define EXE "Mazey.exe"
!define UNKEY "Software\Microsoft\Windows\CurrentVersion\Uninstall\Mazey"
!define RUN "Software\Microsoft\Windows\CurrentVersion\Run"

Name "${NAME}"
OutFile "..\dist\Mazey-Setup.exe"
InstallDir "$LOCALAPPDATA\Programs\Mazey"
RequestExecutionLevel user
SetCompressor /SOLID lzma
ShowInstDetails nevershow
AutoCloseWindow true
Caption "${NAME} ${VERSION}"
VIProductVersion "${VERSION}.0"
VIAddVersionKey "ProductName" "${NAME}"
VIAddVersionKey "FileDescription" "${NAME} installer"
VIAddVersionKey "FileVersion" "${VERSION}"
VIAddVersionKey "LegalCopyright" "ARIAMIR"
BrandingText "Mazey · گروه آموزشی ماز"

!define MUI_ICON "..\src-tauri\icons\icon.ico"
!define MUI_UNICON "..\src-tauri\icons\icon.ico"
!define MUI_HEADERIMAGE
!define MUI_HEADERIMAGE_BITMAP "header.bmp"
!define MUI_HEADERIMAGE_RIGHT
!define MUI_WELCOMEFINISHPAGE_BITMAP "welcome.bmp"
!define MUI_WELCOMEPAGE_TITLE "مازِی"
!define MUI_WELCOMEPAGE_TEXT "جزیره بالای لپ‌تاپ برای گروه آموزشی ماز. نصب فقط برای همین کاربر است — Admin لازم نیست. بعد از نصب خودش باز می‌شود و با ویندوز می‌آید."
!insertmacro MUI_PAGE_WELCOME
!insertmacro MUI_PAGE_INSTFILES
!insertmacro MUI_UNPAGE_CONFIRM
!insertmacro MUI_UNPAGE_INSTFILES
!insertmacro MUI_LANGUAGE "English"

Section "Install"
  nsExec::Exec 'taskkill /F /IM "${EXE}"'
  Pop $0
  StrCpy $1 0
  free_wait:
    Sleep 250
    IfFileExists "$INSTDIR\${EXE}" 0 free_done
    ClearErrors
    Delete "$INSTDIR\${EXE}"
    IfErrors 0 free_done
    IntOp $1 $1 + 1
    IntCmp $1 32 free_done
    nsExec::Exec 'taskkill /F /IM "${EXE}"'
    Pop $0
    Goto free_wait
  free_done:

  SetOutPath "$INSTDIR"
  File "/oname=${EXE}" "..\src-tauri\target\release\mazey.exe"
  WriteUninstaller "$INSTDIR\Uninstall.exe"
  CreateShortCut "$SMPROGRAMS\${NAME}.lnk" "$INSTDIR\${EXE}" "" "$INSTDIR\${EXE}" 0
  WriteRegStr HKCU "${UNKEY}" "DisplayName" "${NAME}"
  WriteRegStr HKCU "${UNKEY}" "DisplayVersion" "${VERSION}"
  WriteRegStr HKCU "${UNKEY}" "DisplayIcon" "$INSTDIR\${EXE}"
  WriteRegStr HKCU "${UNKEY}" "InstallLocation" "$INSTDIR"
  WriteRegStr HKCU "${UNKEY}" "Publisher" "ARIAMIR"
  WriteRegStr HKCU "${UNKEY}" "URLInfoAbout" "https://biomaze.ir"
  WriteRegStr HKCU "${UNKEY}" "UninstallString" '"$INSTDIR\Uninstall.exe"'
  WriteRegDWORD HKCU "${UNKEY}" "NoModify" 1
  WriteRegDWORD HKCU "${UNKEY}" "NoRepair" 1
  Exec '"$INSTDIR\${EXE}"'
SectionEnd

Section "Uninstall"
  nsExec::Exec 'taskkill /F /IM "${EXE}"'
  Pop $0
  Sleep 600
  Delete "$SMPROGRAMS\${NAME}.lnk"
  DeleteRegValue HKCU "${RUN}" "${NAME}"
  DeleteRegKey HKCU "${UNKEY}"
  RMDir /r "$INSTDIR"
SectionEnd
