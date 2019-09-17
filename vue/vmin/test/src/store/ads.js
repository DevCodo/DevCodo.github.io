import * as fb from 'firebase';

class Ad {
  constructor(title, description, ownerId, imageSrc = '', promo = false, id = null ) {
    this.title = title
    this.description = description
    this.ownerId = ownerId
    this.imageSrc = imageSrc
    this.promo = promo
    this.id = id
  }
}

export default {

  state: {
    ads: [
      {
        title: 'First ad',
        description: 'Hello i am sedcription',
        promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        id: '123'
      },
      {
        title: 'Second ad',
        description: 'Hello i am sedcription',
        promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        id: '12321'
      },
      {
        title: 'Third ad',
        description: 'Hello i am sedcription',
        promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        id: '324'
      },
    ]
  },
  getters: {
    ads(state) {
      return state.ads
    },
    myAds(state) {
      return state.ads
    },
    promoAds(state) {
      return state.ads.filter(ad => ad.promo)
    },
    adById(state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  },
  mutations: {
    createAd(state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    async createAd({commit, getters}, {title, description, promo, image}) {
      commit('clearError')
      commit('setLoading', true)
      try {
        // const newAd = new Ad(title, description, getters.user.id, imageSrc, promo)
        // const fbValue = await fb.database().ref('ads').push({title, description, ownerId: getters.user.id, imageSrc, promo})
        // console.log(typeof newAd)
        // console.log(newAd)
        const ad = await fb.firestore().collection("users").add({title, description, ownerId: getters.user.id, imageSrc: '', promo})
        // const fbValue = await fb.database().ref('users')
        const imageExt = image.name.slice(image.name.lastIndexOf("."))
        const fileData = await fb.storage().ref(`ads/${ad.id}.${imageExt}`).put(image)
    
        const imageSrc = fileData.metadata.downloadURLs[0]
        console.log(fileData)
        console.log(imageSrc)
      } catch(error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
      
      // commit('createAd', ad)
    }
  }
}
