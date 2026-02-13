/* File Name: data.js
   Description: ساری سیٹنگز اور پروڈکٹس یہاں تبدیل کریں
*/

const siteConfig = {
    brandName: "Elite Brands Pakistan",
    brandLogo: "https://cdn-icons-png.flaticon.com/512/3163/3163158.png", // یہاں اپنا لوگو لنک لگائیں
    iframeUrl: "https://digitalsiteshub.github.io/", // وہ ویب سائٹ جو اندر کھلے گی
    
    // Hadith Section
    hadithUrdu: "سچا اور امانت دار تاجر (قیامت کے دن) انبیاء، صدیقین اور شہداء کے ساتھ ہوگا۔ (ترمذی: 1209)",
    hadithEnglish: "\"The honest and trustworthy merchant will be with the prophets, the truthful, and the martyrs.\"",
    
    // Banner Ads Codes (اگر کوڈ ہے تو یہاں پیسٹ کریں ورنہ خالی چھوڑ دیں)
    adCodeTop: "", 
    adCodeBottom: ""
};

const products = [
    {
        id: 1,
        title: "Premium Leather Watch",
        category: "Watches",
        price: "2,500",
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400",
        description: "اصلی چمڑے سے بنی ہوئی واٹر پروف گھڑی۔",
        links: [
            { name: "Daraz", url: "https://daraz.pk", type: "store" },
            { name: "WhatsApp", url: "https://wa.me/923001234567", type: "whatsapp" }
        ]
    },
    {
        id: 2,
        title: "Beard Growth Oil",
        category: "Grooming",
        price: "1,200",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400",
        description: "داڑھی کی نشوونما کے لیے بہترین قدرتی تیل۔",
        links: [
            { name: "Markaz", url: "https://markaz.app", type: "store" }
        ]
    },
    // مزید پروڈکٹس اسی طرح ایڈ کریں
];
