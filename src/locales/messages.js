export function getDefaultLang(browserLang) {
    if (browserLang && browserLang.length > 0) {
        return browserLang.search("-") > -1 ? browserLang.split("-")[0] : browserLang;
    }
    return browserLang;
}

export default {
    "en": {
        "nav.home": "HOME",
        "nav.trade": "On Arrival",
        "nav.manage-stock": "Prepare for a new life",
        "nav.help": "On Campus",
        "nav.account": "My ACCOUNT",
        "home.search-title": "Home",
    },
    "ja": {
        "nav.home": "ホーム",
        "nav.trade": "購入/販売",
        "nav.manage-stock": "在庫管理",
        "nav.help": "助けて",
        "nav.account": "アカウント",
        "home.search-title": "車両の検索",
    }
}
