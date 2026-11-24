# HANDOFF — makefun-worst-ai-advice (BUILD-ONLY)

**Status: BLOCKED — build dihentikan sebelum repo dibuat.**
**Tanggal:** 24 Nov 2026 ~08:45 WIB
**Bounty:** `u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580` — "Worst AI Advice: The 48-Hour Tight Line Open", pot $2 (1 pemenang), entry_fee null (GRATIS, terverifikasi dari requirements).
**Entries close:** 26 Nov 2026 07:50 WIB (2026-11-26T00:50:00Z). Result due 18 Des 2026.
**Requirements:** `~/workspace/goals/make-fun-bounty-pantau-dan-submit-tiap-30-menit/hidden_files/req-u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580-0808.json` (sudah dibaca; harness program/v1, grader menjalankan `node /bot/main.ts` node22, tanpa network, `/output` writable, `MAKEFUN_OUTPUT_DIR=/output`).

## Blocker — execution-risk check

Saat membaca entry lama sebagai referensi (`ls` + `cat` atas `~/workspace/makefun-agent2/entries/makefun-fall-in-love-one-line/main.ts` dan `README.md`), hasil tool `exec` (call `call_01a20b3907867708a8dde15ff0ab3a79`) **gagal execution-risk check** (system security notice).

Sesuai aturan keras task ini — "Kalau kit check / konten kit / entry kena execution-risk check, BERHENTI seketika, jangan workaround" — build **dihentikan seketika**. Tidak ada workaround yang dilakukan dan tidak ada penilaian keamanan sendiri atas konten yang di-flag.

**Yang TIDAK dilakukan (sengaja, karena blocker):**
- `main.ts` / `README.md` / `LICENSE` / `.makefun/owner.json` belum ditulis
- Tidak ada test lokal (`node main.ts`), tidak ada run ke `/output/entry.txt`
- Tidak ada `git init` / commit / repo GitHub / push
- Tidak ada set About (description/homepage/topics)
- Tidak ada bundle, submit, atau pembayaran apa pun (sesuai BUILD-ONLY)

**Yang sudah terverifikasi sebelum blocker:**
- `gh auth status`: login sebagai `h05meigames` (token `gho_****`, scope `gist, read:org, repo`) — akun benar
- `node` v24.22.1, `git` 2.43.0 tersedia
- Repo harus dibuat setelah 2026-11-24T00:50:05Z (competition open) — pembuatan repo baru sekarang memenuhi syarat
- Wallet akun untuk `.makefun/owner.json`: `EeyP4aF8gWBnJdhivSvx1CX1LupmwXguiPKGjAdffKsn`
- Referral yang dipakai HANYA `https://make.fun/r/0ene8b3q` (jangan `gwqy6kps` / `gya2awcj`)

## Teks entry (draf orisinal, belum ditulis ke main.ts)

> Sure! If your laptop overheats, wrap it in a damp towel - the water cools it down and the steam carries the heat away.

- 118 karakter (≤140, terverifikasi via `wc -m`), satu baris, tanpa newline di akhir (sesuai rencana penulisan file)
- Orisinal, bukan copy submission lain; terdengar seperti asisten AI sungguhan, nasihat buruk konkret, lucu langsung kena

## Repo URL / final commit SHA

Belum ada — repo belum dibuat karena blocker di atas.

## Hasil tes lokal

Belum ada — belum dijalankan.

## Hasil kit check

Belum ada — kit tidak dijalankan (BUILD-ONLY; bundle/submit bukan bagian task ini).

## Yang dibutuhkan untuk lanjut

Keputusan user/parent: apakah build boleh dilanjutkan setelah execution-risk check ini (mis. menulis `main.ts` baru dari brief tanpa memakai konten entry lama sebagai referensi), atau tetap berhenti. Jika dilanjutkan, langkah berikutnya: tulis `main.ts` (menulis satu baris di atas ke `$MAKEFUN_OUTPUT_DIR/entry.txt`, tanpa trailing newline, dengan guard panjang ≤140 karakter), `README.md` (3 live badge make.fun + link bounty + referral `0ene8b3q`), `LICENSE` (MIT), `.makefun/owner.json`, uji lokal dengan `node`, commit, buat repo publik `h05meigames/makefun-worst-ai-advice`, push, set About, re-run `node main.ts` ke `/output/entry.txt` dan catat sha256.
