import {
    SET_NEWSLETTERS

} from './types';

export function fetchNewsletters() {

    const response = {
        data: [
            {
                _id: '115',
            title: 'Happy Holidays Fam',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper eget nulla facilisi etiam dignissim. Diam maecenas ultricies mi eget mauris pharetra et. Netus et malesuada fames ac turpis egestas. Id porta nibh venenatis cras sed. Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. Risus pretium quam vulputate dignissim suspendisse in. Eget aliquet nibh praesent tristique magna sit amet purus. Ac felis donec et odio. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Integer feugiat scelerisque varius morbi enim nunc faucibus. Sapien et ligula ullamcorper malesuada. Bibendum arcu vitae elementum curabitur vitae. Purus gravida quis blandit turpis cursus in hac. Facilisis magna etiam tempor orci eu lobortis. Ultrices dui sapien eget mi proin sed. Erat imperdiet sed euismod nisi porta. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum. Ornare arcu dui vivamus arcu felis. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Aenean euismod elementum nisi quis eleifend quam adipiscing.', 
            date: new Date(),
            imageUrl: 'http://via.placeholder.com/960x258'
            },
            {
                _id: '935',
            title: 'Second Newsletter',
            body: 'WOoooooo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper eget nulla facilisi etiam dignissim. Diam maecenas ultricies mi eget mauris pharetra et. Netus et malesuada fames ac turpis egestas. Id porta nibh venenatis cras sed. Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. Risus pretium quam vulputate dignissim suspendisse in. Eget aliquet nibh praesent tristique magna sit amet purus. Ac felis donec et odio. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Integer feugiat scelerisque varius morbi enim nunc faucibus. Sapien et ligula ullamcorper malesuada. Bibendum arcu vitae elementum curabitur vitae. Purus gravida quis blandit turpis cursus in hac. Facilisis magna etiam tempor orci eu lobortis. Ultrices dui sapien eget mi proin sed. Erat imperdiet sed euismod nisi porta. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum. Ornare arcu dui vivamus arcu felis. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Aenean euismod elementum nisi quis eleifend quam adipiscing.', 
            date: new Date(),
            imageUrl: 'http://via.placeholder.com/960x258'
            }
        ]
    }

    return {
        type: SET_NEWSLETTERS,
        payload: response.data
    }
}