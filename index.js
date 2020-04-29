function showModalContent(betta, description) {
    const content = ` <div class="modal-content">
                            <div class="modal-row-1">
                            <img src="assets/images/${betta}.jpg" alt="${betta}">
                            </div>
                            <div class="modal-row-2">
                                <div class="modal-row-paragraf">
                                    <h3>${betta} Betta</h3>
                                    <p>${description}</p>
                                </div>
                            </div>
                            <div class="modal-row-3">
                                <button class="btn-close">Close</button>
                        </div>`;
    
    modalContainer.style.display = 'flex';
    modalContainer.innerHTML = content;
    return;
}

const description = {
    crowntail : 'The Crowntail Betta is one of the most popular freshwater fish. This species is relatively young, first bred by Ahmad Yusuf in Indonesia around 25 years ago. The fins of this species have a long spikey crown appearance, however if the webbing reaches more than 2/3 up the tail then it is classified as a different type – the Combtail Betta. While the males show striking colors with long fins and tail, female look quite different. Usually the female has lighter colors with a shorter tail with a less majestic overall appearance.',
    veiltail : 'This is another very common variation of tail type which is widely available. The male of this variation has a long, flowing downwards swooping tail. It comes in many different colors variations and the overall appearance is quite remarkable. If you want to breed Betta fish, you should know this is a dominant tail type over other variations, and therefore is one of the easiest to breed. The female is again quite different. She does not have any of the remarkable characteristics of the male but sometimes has bright colors. Females tend to have lighter colorations and short fins and tail.',
    plakat : 'Contrary to most Betta Fish, Plakat Bettas have short and round tails. They are almost the exception to the rule. Their fins are also quite short when compared to other variations. Still, the male shows amazing colors.',
    halfmoon : 'The name Halfmoon Betta is quite self-explanatory. The tail is large creating half a circle similar to the shape of a half moon. This type is strictly bred in captivity, you won’t find them in the wild. Halfmoon Bettas are commonly bred among experts to exhibit during Betta shows. First bred in the 1980s, the Halfmoon Betta didn’t take long to reach Europe and then became internationally famous. These fish can be a bit challenging to breed and come with a more aggressive behavior.',
    doubletail : 'The Double Tail is easily recognizable as it has two distinct tails separated from the base. Usually, this variation has a larger and longer dorsal fin with a shorter body. This gene can be found in any Betta, of any tail shape and size. This often means that single tail Bettas already show double tail characteristics such as dorsal fins with more rays than normal which give them a richer appearance.',
    elephantear : 'This is a very unique fish which doesn’t really fit into the tail, or color category. Instead, its unique feature is its pectoral fins. Elephant Ear Bettas or more commonly Dumbo Bettas, have quite a unique shape. Usually with brilliant striking colorations, the fins of this variation are quite funny.', 
    deltatail : 'The Delta Tail Betta has a rather large tail. It is named after the Greek letter d as the tail resembles the shape of the letter delta (∆). The tail starts to narrow towards the body and it widens toward the edges resembling the triangular shape of the Greek letter.',
    rosetail : 'The Rosetail Betta is a variation of the half-moon where the total spread of the caudal fin is larger than 180°. The feature of this variation is that the rays of the tail are particularly branchy. This branching gives a striking look to the fish and makes the caudal fin looking like a rose. If the tail becomes particularly branchy with a very ruffled appearance then its considered a Feathertail.',
    blue : 'You might think that choosing a blue betta fish is really simple, but this is not always the case. There are many different shades of blue around. The most common colors are Steel Blue (almost grayish which gives the fish a cold coloration) and the Royal Blue Betta, which is a vibrant and gorgeous coloration showing an iridescent bright blue.',
    blackorchid : 'The Black Betta fish variation has a dark overall coloration. Occasionally you might observe purple or blue highlights along its body. An interesting fact about the black variation is that this group can be divided into three different types, Melano, Black Lace and Metallic. The Black Metallic has iridescent scales almost like the color of copper and translucent.',
    red : 'Red is the dominant color with Betta Fish. Usually appearing as a striking and full bodied red color, sometimes this red can appear washed off too. In this occasion you should watch their diet and water condition as your fish might not be feeling at ease.',
    yellow : 'Yellow Betta Fish are also a very common color found. This fish generally shows a full rich body yellow coloration extending along the fins and tail. This variation can have many different yellow shadings, from extremely yellow to a more tamed soft coloration.',
    white : 'The White Betta Fish might appear a bit plain when compared to other color variations. These Bettas are completely white. However even though the coloration can appear a bit dull, if you choose the right tail type, they are quite majestic. You can combine coloration and tail type to find the best for you. Long flowing swooping tails are quite majestic even though completely white.',
    purple : 'True purple Betta Fish are quite difficult to find. You will often find them in rich violets or purple-blueish with other color variations such as copper and black. It’s often common to find them with purple bodies and the fins or the face another color. They have all types of tail types and color patterns. You will just have to find the one that best suit your taste!',
    green : 'Full green Betta Fish are quite rare. Most commonly they appear as turquoise. Often the green is masked under a darker coloration, and if you shine light against it an iridescent green tone can appear. Bright green and dark green variations which are visible with the naked eye do exist but are very rare and often considered very precious.',
    mustard : 'Mustard Gas Betta Fish are quite remarkable. They are a bi-colored variation showing different coloration between body and fins. The body is dark usually varying from either blue or green. Their fins are usually yellow or orange hence their name. This variation is often mistakenly called Chocolate as the color of the fins are quite similar. However the chocolate variation has a brown body.',
    dragon : 'This is a relatively new pattern created through selective breeding. This pattern is very popular for its bright metallic coloration. The Dragon Scale Betta Fish has a strong full bodied color with body scales resembling those of a lizard or a dragon. Their base body color is usually a rich color such as red with iridescent pale scales across its main body (often copper in color).',
    butterfly : 'The Butterfly Betta is another common pattern and fairly distinctive. Typically, it has a solid body color which extends to the base of the fins and tail. This color suddenly stops and is replace by a paler and iridescent color. Usually the fins and tail are white or transparent. Another variation of this pattern is to have the body of one color and then the inside of the fins and tail of another to then become white or transparent around the edges.',
    marble : 'Marble Bettas are another very popular variation as they have an incredible color variation. Their colors appear blotchy and irregular, often with a light pale solid body color with rich reds and blues creating a pattern. Fins can show a marble like pattern or solid translucent coloration. The best thing about this type is that they develop their coloration over time. Sometimes they will appear a certain color one week and the following week you will find a different one. However as the fish ages, this ability will slow down.',
    koi : 'The Koi Betta is a variation of the Marble type, carefully selected through breeding. As the name suggests, this variation was bred to resemble the very popular Koi pond fish. This is not a species found in the wild and was carefully bred over the years by aquarium hobbyist to preserve the most amazing characteristics and features. There isn’t a distinct coloration for this type, their brightness, richness and colors vary considerably.'
}

const modalContainer = document.querySelector('.modal-container');
const buttons = document.querySelectorAll('button');

// Menampilkan modal saat tomblok show diklik
for (let button of buttons) {
    button.addEventListener('click', function(e) {
        const target = e.target;
        if (target.classList.contains('btn-crown')) showModalContent('crowntail', description.crowntail);
        if (target.classList.contains('btn-veil')) showModalContent('veiltail', description.veiltail);
        if (target.classList.contains('btn-plakat')) showModalContent('plakat', description.plakat);
        if (target.classList.contains('btn-halfmoon')) showModalContent('halfmoon', description.halfmoon);
        if (target.classList.contains('btn-double')) showModalContent('doubletail', description.doubletail);
        if (target.classList.contains('btn-elephant')) showModalContent('elephantear', description.elephantear);
        if (target.classList.contains('btn-delta')) showModalContent('deltatail', description.deltatail);
        if (target.classList.contains('btn-rose')) showModalContent('rosetail', description.rosetail);
        if (target.classList.contains('btn-blue')) showModalContent('blue', description.blue);
        if (target.classList.contains('btn-black')) showModalContent('blackorchid', description.blackorchid);
        if (target.classList.contains('btn-red')) showModalContent('red', description.red);
        if (target.classList.contains('btn-yellow')) showModalContent('yellow', description.yellow);
        if (target.classList.contains('btn-white')) showModalContent('white', description.white);
        if (target.classList.contains('btn-purple')) showModalContent('purple', description.purple);
        if (target.classList.contains('btn-green')) showModalContent('green', description.green);
        if (target.classList.contains('btn-mustard')) showModalContent('mustard', description.mustard);
        if (target.classList.contains('btn-dragon')) showModalContent('dragonscale', description.dragon);
        if (target.classList.contains('btn-butterfly')) showModalContent('butterfly', description.butterfly);
        if (target.classList.contains('btn-marble')) showModalContent('marble', description.marble);
        if (target.classList.contains('btn-koi')) showModalContent('koi', description.koi);
    });
}

// Menyembunyikan modal saat tombol close di klik
document.body.addEventListener('click', function(e) {
    const target = e.target;

    if (target.classList.contains('btn-close')) {
        modalContainer.style.display = 'none';
    }
});