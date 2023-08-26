const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

function wrapping(gifts) {
    console.log('we are here');
    return gifts.map(gift => {
        const wrapper = '*'.repeat(gift.length + 2);
        return `${wrapper}\n*${gift}*\n${wrapper}`;
    });
}
  

console.log(wrapped)