/* ပြင်ဆင်ရန်:
   sites array ထဲကို သင့်လိုချင်သမျှ site name, url, category, description တွေ ထည့်နိုင်ပါတယ်။
   icon ကို domain အလိုက် Google favicon service ဖြင့် ဆွဲယူထားပါတယ်။
*/

const sites = [
  // သတင်းဆိုဒ် နမူနာများ
{ name: "BBC", url: "https://www.bbc.com/burmese", category: "သတင်း", desc: "မြန်မာ သတင်း", domain: "https://i.ibb.co/RnHpmYC/bbc.png" },
  { name: "DVB", url: "https://www.dvb.no/", category: "သတင်း", desc: "မြန်မာ သတင်း", domain: "https://i.ibb.co/DDhp3BLH/photo-2025-09-17-20-49-53.jpg" },
  { name: "Mizzima", url: "https://bur.mizzima.com/", category: "သတင်း", desc: "မြန်မာ သတင်း", domain: "https://i.ibb.co/kgzRk3Sv/mizzima.png" },
  { name: "The Irrawaddy", url: "https://burma.irrawaddy.com/category/news", category: "သတင်း", desc: "မြန်မာ/နိုင်ငံတကာ သတင်း", domain: "https://i.ibb.co/LXDWzxFz/image.jpg" },
  { name: "Eleven Media", url: "https://news-eleven.com/news", category: "သတင်း", desc: "ပြည်တွင်း သတင်း", domain: "https://i.ibb.co/SwWmsWRw/eleven.png" },
  { name: "Myanmar NOW", url: "https://myanmar-now.org/mm/", category: "သတင်း", desc: "သတင်းဆန်းစစ်", domain: "https://i.ibb.co/zH830S40/photo-2025-09-17-20-49-49.jpg" },

  // ဗီဒီယို / မြန်မာစာတန်းထိုး / ဇာတ်ကား နမူနာများ
 
   { name: "မြန်မာစာတန်းထိုးဇာတ်ကားများ", url: "https://mmsubmovie.com/", category: "ဇာတ်ကား", desc: "Asian shows & movies", domain: "mmsubmovie.com" },
  { name: "မြန်မာစာတန်းထိုးရုပ်ရှင်", url: "https://yoteshin.net/", category: "ဇာတ်ကား", desc: "Asian shows & movies", domain: "yoteshin.net" },
  { name: "Viu (Myanmar)", url: "https://www.viu.com/ott/mm", category: "ဇာတ်ကား", desc: "Asian shows & movies", domain: "viu.com" },
  { name: "PyonePlay", url: "https://www.pyoneplay.com/", category: "ဇာတ်ကား", desc: "Myanmar TV & drama", domain: "https://i.ibb.co/CK9C2LdN/pyoneplay.png" },
  { name: "ကမ္ဘာ့ချန်နယ်လိုင်းပေါင်းစုံ", url: "https://tv.garden/mm/cdsVyojNjKqygk", category: "Live", desc: "StreamTV", domain: "https://i.ibb.co/hxXvFXnd/photo-2025-09-17-20-49-43.jpg" },
  { name: "Coda Shop Thai", url: "https://www.codashop.com/th-th/", category: "Game", desc: "Shoping", domain: "https://i.ibb.co/gbXW295f/photo-2025-09-17-20-54-15.jpg" }, 
  { name: "Iflix (example)", url: "https://www.iflix.com/", category: "ဇာတ်ကား", desc: "Movies & series", domain: "https://i.ibb.co/rKP2qdtD/photo-2025-09-17-20-49-32.jpg" }
];

// grid element
const grid = document.getElementById('grid');

/* favicon helper: Google favicon service */
function faviconUrl(domain){
  return `https://www.google.com/s2/favicons?sz=128&domain=${encodeURIComponent(domain)}`;
}

/* build card */
function makeCard(s){
  const a = document.createElement('a');
  a.className = 'card';
  a.href = s.url;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';

  const thumb = document.createElement('div');
  thumb.className = 'thumb';
  const img = document.createElement('img');
  img.src = faviconUrl(s.domain || new URL(s.url).hostname);
  img.alt = s.name + ' icon';
  thumb.appendChild(img);

  const info = document.createElement('div');
  info.className = 'info';
  const name = document.createElement('div');
  name.className = 'name';
  name.textContent = s.name;
  const meta = document.createElement('div');
  meta.className = 'meta';
  meta.textContent = `${s.category} · ${s.desc || ''}`;

  info.appendChild(name);
  info.appendChild(meta);

  a.appendChild(thumb);
  a.appendChild(info);
  return a;
}

/* initial render */
function render(list){
  grid.innerHTML = '';
  list.forEach(s => {
    const card = makeCard(s);
    grid.appendChild(card);
  });
}

/* on load */
render(sites);

/* --- လိုချင်ရင်: 
   - sites array ကို ဖိုင်ရှင်းပေါ်က JSON ဖိုင်တစ်ခုနဲ့ ထည့်ချင်တယ်ဆိုရင် fetch() သုံးပြီး ပြောင်းလဲနိုင်သည်။
   - Icon မပြနိုင်ပါက default placeholder ထည့်လိုပါက makeCard() ထဲမှာ စစ်ပြီး image.onerror သတ်မှတ်နိုင်သည်။
*/




