import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import '../styles/main.scss';

const products = [
    {
        id: 1,
        name: 'The Awesym',
        price: '$749',
        image: 'https://static.wixstatic.com/media/731342_5b13cdbbf9e44eb6aea5aa833236bb04~mv2.jpg/v1/fill/w_508,h_1156,al_c,q_85,usm_0.66_1.00_0.01/IMG_4927_edited_edited.webp'
    },
    {
        id: 2,
        name: 'Superpark',
        price: '$699',
        image: 'https://static.wixstatic.com/media/731342_f33b4fe71a6f4a9d975ee071857a674b~mv2.jpg/v1/fill/w_236,h_1126,al_c,q_80,usm_0.66_1.00_0.01/superpark%20base.webp'
    },
    {
        id: 3,
        name: 'G-Wagon',
        price: '$999',
        image: 'https://static.wixstatic.com/media/731342_6a33e213bd2c475788299aa83ebcbcfd~mv2.png/v1/fill/w_236,h_1126,al_c,q_85,usm_0.66_1.00_0.01/G-Wagon%20Base_tiff.webp'
    },
    {
        id: 4,
        name: 'Jetson',
        price: '$799',
        image: 'https://static.wixstatic.com/media/731342_4f86626f3ae34fa29fab3554df0f0554~mv2.jpg/v1/crop/x_173,y_108,w_1125,h_2794/fill/w_480,h_1192,al_c,q_85,usm_0.66_1.00_0.01/limited.webp'
    },
    {
        id: 5,
        name: 'Judy',
        price: '$699',
        image: 'https://static.wixstatic.com/media/731342_d0ddc2b07166427fa1686fff62197a30~mv2.jpg/v1/crop/x_174,y_121,w_1183,h_2771/fill/w_486,h_1138,al_c,q_85,usm_0.66_1.00_0.01/goodvibes.webp'
    },
    {
        id: 6,
        name: 'Pillow Monster',
        price: '$999',
        image: 'https://static.wixstatic.com/media/731342_3a7a7b9c291b4919b1095ed8a1cf0ad9~mv2.jpg/v1/crop/x_272,y_340,w_990,h_2460/fill/w_466,h_1158,al_c,q_85,usm_0.66_1.00_0.01/pillowboard.webp'
    },
    {
        id: 7,
        name: 'Momentum',
        price: '$1299',
        image: 'https://static.wixstatic.com/media/731342_ed2e32cec1b645029598db13b56dab69~mv2.jpg/v1/fill/w_228,h_1138,al_c,q_80,usm_0.66_1.00_0.01/Jetson%20Base%20Black%20.webp'
    },
    {
        id: 8,
        name: 'Vixen',
        price: '$619',
        image: 'https://static.wixstatic.com/media/731342_bb4a4fa67c4d4e60ad8f96e97edd68e0~mv2.jpg/v1/fill/w_644,h_1288,al_c,q_85,usm_0.66_1.00_0.01/ixon2021.webp'
    },
    {
        id: 9,
        name: 'Love Mountain',
        price: '$675',
        image: 'https://static.wixstatic.com/media/731342_12c4622c69c942259866602f3eeb42bb~mv2.jpg/v1/fill/w_684,h_1368,al_c,q_85,usm_0.66_1.00_0.01/lovemountain.webp'
    },
    {
        id: 10,
        name: 'Hooligan',
        price: '$659',
        image: 'https://static.wixstatic.com/media/731342_7957ecffe7d84e58b95bb6c10686a0e7~mv2.png/v1/fill/w_238,h_1160,al_c,q_85,usm_0.66_1.00_0.01/Easy%20Rider%20Hooligan%20Top.webp'
    }
]

const ItemListContainer = () => {

    const [prodList, setprodList] = useState([]);

    const myPromise = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });

    const handleResolved = function(data) {
        setprodList(data);
    }

    useEffect(() => {
        myPromise.then(handleResolved);
    }, []);

    return (
        <div className="main-content">
            <ItemList products={prodList}  />
        </div>      
    )
}

export default ItemListContainer
