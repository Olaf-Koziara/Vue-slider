export function preloadImage(url)
{
    const img = document.createElement("img");
    const p  = new Promise(function(resolve,reject){
        img.onload= () => resolve();
        img.onerror = () => reject();
    }
    );
    img.src=url;
    return p;
}