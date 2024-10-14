
function setupIntersectionObserver(element, isLTR, speed) {
    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        console.log(element,isIntersecting);
    }

    const intersectionObserver = new IntersectionObserver(intersectionCallback);

    intersectionObserver.observe(element);
}
const linel = document.getEtementById('linel');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

setupIntersectionObserver(linel,true,0.15);
setupIntersectionObserver(line2,false,0.15);
setupIntersectionObserver(line3,false,0.15);
