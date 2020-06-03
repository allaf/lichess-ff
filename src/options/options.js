function saveOptions(e) {
    browser.storage.local.set({
        url: document.querySelector("#token").value.trim()
    });
    e.preventDefault();
}

function restoreOptions() {
    let storageItem = browser.storage.local.get('token');
    storageItem.then((res) => {
        console.log(res)
        document.querySelector("#token").value = res.token ? res.token.trim() : '';
    });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
