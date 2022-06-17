export default function bsTier() {
    const tiers = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
    let flag, bsInstalled = false;
    tiers.forEach(function(tier, index) {
        flag = document.createElement('div');
        flag.setAttribute('id', 'visible-' + tier);
        if (index == 0) {
            flag.classList.add('flag', 'visible-' + tier + '-block', 'd-block', 'd-' + tiers[index + 1] + '-none');
        }
        else if (index == (tiers.length - 1)) {
            flag.classList.add('flag', 'visible-' + tier + '-block', 'd-none', 'd-' + tier + '-block');
        }
        else {
            flag.classList.add('flag', 'visible-' + tier + '-block', 'd-none', 'd-' + tier + '-block', 'd-' + tiers[index + 1] + '-none');
        }
        document.body.appendChild(flag);
        if (getComputedStyle(flag).getPropertyValue('display') == 'block') {
            bsInstalled = true;
            flag.remove();
            return tiers[index];
        }
        else {
            flag.remove();
        }
    });
    if (!bsInstalled) {
        return 'Bootstrap not installed';
    }
}