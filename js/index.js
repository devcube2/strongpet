/* localStorage 에 상품목록 저장 */
function generateStock() {
    let 상품목록 = []

    const 상품1 = {
        no: 1,
        category: '과일/야채/치즈/노른자',
        name: '건강한펫 동결건조 꼬마양배추 35g',
        desc: [
            'img/main/과일-야채-치즈-노른자/동결건조꼬마양배추35g/content-1.webp',
            'img/main/과일-야채-치즈-노른자/동결건조꼬마양배추35g/content-2.webp',
            'img/main/과일-야채-치즈-노른자/동결건조꼬마양배추35g/content-3.webp',
            'img/main/과일-야채-치즈-노른자/동결건조꼬마양배추35g/content-4.webp',
            'img/main/과일-야채-치즈-노른자/동결건조꼬마양배추35g/content-5.webp',
            'img/main/과일-야채-치즈-노른자/동결건조꼬마양배추35g/content-6.webp'
        ],
        weekly: true,
        best: true,
        thumbnail: [
            'img/main/과일-야채-치즈-노른자/동결건조꼬마양배추35g/view-1.jpg',
            'img/main/과일-야채-치즈-노른자/동결건조꼬마양배추35g/view-2.jpg',
            'img/main/과일-야채-치즈-노른자/동결건조꼬마양배추35g/view-3.jpg'
        ],
        price: 12000,
        quantity: 10,
        star: 5
    }
    상품목록.push(상품1);

    const 상품2 = {
        no: 2,
        category: '과일/야채/치즈/노른자',
        name: '건강한펫 동결건조 노른자 100g',
        desc: [
            'img/main/과일-야채-치즈-노른자/동결건조노른자100g/content-1.webp',
            'img/main/과일-야채-치즈-노른자/동결건조노른자100g/content-2.webp',
            'img/main/과일-야채-치즈-노른자/동결건조노른자100g/content-3.webp',
            'img/main/과일-야채-치즈-노른자/동결건조노른자100g/content-4.webp',
            'img/main/과일-야채-치즈-노른자/동결건조노른자100g/content-5.webp',
            'img/main/과일-야채-치즈-노른자/동결건조노른자100g/content-6.webp',
            'img/main/과일-야채-치즈-노른자/동결건조노른자100g/content-7.webp',
        ],
        weekly: true,
        best: true,
        thumbnail: [
            'img/main/과일-야채-치즈-노른자/동결건조노른자100g/view-1.jpg',
            'img/main/과일-야채-치즈-노른자/동결건조노른자100g/view-2.jpg',
        ],
        price: 12000,
        quantity: 10,
        star: 5
    }
    상품목록.push(상품2);

    const 상품3 = {
        no: 3,
        category: '우주최초츄르/파우더',
        name: '우주최초츄르',
        desc: [
            'img/main/우주최초츄르-파우더/우주최초츄르/content-1.webp',
            'img/main/우주최초츄르-파우더/우주최초츄르/content-2.webp',
            'img/main/우주최초츄르-파우더/우주최초츄르/content-3.webp',
            'img/main/우주최초츄르-파우더/우주최초츄르/content-4.webp',
            'img/main/우주최초츄르-파우더/우주최초츄르/content-5.webp',
            'img/main/우주최초츄르-파우더/우주최초츄르/content-6.webp'
        ],
        weekly: true,
        best: true,
        thumbnail: [
            'img/main/우주최초츄르-파우더/우주최초츄르/view-1.jpg',
            'img/main/우주최초츄르-파우더/우주최초츄르/view-2.jpg',
            'img/main/우주최초츄르-파우더/우주최초츄르/view-3.jpg'
        ],
        price: 3500,
        quantity: 10,
        star: 5
    }
    상품목록.push(상품3);

    localStorage.setItem('stock', JSON.stringify(상품목록))
}

// 한줄에 몇개씩 출력할건지 (이건 수정시 css 랑 연관되어있음...)
const displayLineCount = 5

function test(str1) {
    str1 += 'abcd'

    return str1
}

function generateLiTag(thumbnail, name, price) {
    let liTag = `
        <li class="show-box">
            <img src="${thumbnail}" alt="">
            <span class="f-bold f-size12">${name}</span>
            <br />
            <span class="f-bold f-size12">${price}</span>
        </li>
    `
    return liTag
}

function loadHTML() {
    generateStock()

    const 상품목록 = JSON.parse(localStorage.getItem('stock'))
    const weeklyGoods = document.querySelector('#weekly-best-goods')    

        let count = 0
    let html = '<p class="f-size24 f-bold top-bottom-pad15">WEEKLY BEST PRODUCT</p>'
    for (let i = 0; i < parseInt(상품목록.length / displayLineCount); i++) {
        html += '<ul class="show-line">'
        for (let j = 0; j < displayLineCount; j++, count++) {
            html += generateLiTag(상품목록[count].thumbnail[0], 상품목록[count].name, 상품목록[count].price)
        }
        html += '</ul>'
    }

    html += '<ul class="show-line">'
    for (; count < 상품목록.length; count++) {
        html += generateLiTag(상품목록[count].thumbnail[0], 상품목록[count].name, 상품목록[count].price)
    }
    html += '</ul>'
    console.log(html)

    weeklyGoods.innerHTML = html
}