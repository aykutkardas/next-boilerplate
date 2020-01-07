import { action, observable } from 'mobx'
import { useStaticRendering } from 'mobx-react'

const isServer = typeof window === 'undefined'
// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(isServer)

export class Store {
  // @observable
  // value = null;

  // @action
  // setValue(value){
  //   this.value = value;
  // }

  hydrate(serializedStore) {
    this.lastUpdate =
      serializedStore.lastUpdate != null
        ? serializedStore.lastUpdate
        : Date.now()
    this.light = !!serializedStore.light
  }
}

export async function fetchInitialStoreState() {
  // You can do anything to fetch initial store state
  return {}
}