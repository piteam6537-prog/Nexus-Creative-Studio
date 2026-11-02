# Nexus Creative Studio — Foundation 01

یہ React + Vite پر مبنی ابتدائی Project Foundation ہے۔

## اس ورژن میں کیا موجود ہے؟
- Responsive dark dashboard
- Black + Neon Green visual theme
- Sidebar navigation
- Dashboard quick-start cards
- Design Studio / AI Studio / Templates / Projects / Uploads / Credits کے ابتدائی صفحات
- React-Konva، Supabase JS اور routing کی dependencies
- Supabase connection placeholder
- Cloudflare Pages کے لیے Vite build setup

## ضروری چیز
یہ ابھی Foundation UI ہے، مکمل Canva/Adobe جیسا editor یا حقیقی AI سروس نہیں۔ اگلے مراحل میں editor، authentication، database، credits اور AI APIs الگ الگ شامل ہوں گے۔

## کمپیوٹر پر چلانے کا طریقہ
1. Node.js کا LTS ورژن انسٹال کریں۔
2. اس فولڈر کو کمپیوٹر پر Extract کریں۔
3. اس فولڈر میں Terminal / Command Prompt کھولیں۔
4. یہ کمانڈ چلائیں:

   npm install

5. پھر:

   npm run dev

6. Terminal میں دکھایا گیا local address براؤزر میں کھولیں۔

## Production build
   npm run build

Vite کی تیار شدہ فائلیں `dist` فولڈر میں بنیں گی۔ Cloudflare Pages پر Vite project deploy کرتے وقت:
- Build command: `npm run build`
- Build output directory: `dist`

## Supabase
- `.env.example` کی کاپی بنا کر `.env.local` نام دیں۔
- `VITE_SUPABASE_URL` اور `VITE_SUPABASE_ANON_KEY` میں صرف Supabase Project URL اور Publishable/anon key رکھیں۔
- Service Role / Secret key کبھی frontend میں نہ رکھیں۔
- ابھی Supabase connection فعال نہیں کیا گیا۔

## Blogger
Blogger اس پروجیکٹ کی مرکزی public website ہوگا۔ یہ React app الگ static app کے طور پر deploy ہوگی۔ Blogger کے Launch Studio بٹن کو بعد میں deployed app کے URL سے جوڑا جائے گا۔
اس مرحلے پر Blogger theme میں کوئی تبدیلی نہ کریں۔

## اگلا مرحلہ
Dashboard اور navigation کی جانچ کے بعد Design Editor کا حقیقی canvas، object controls، layers اور saveable project structure بنائیں۔
