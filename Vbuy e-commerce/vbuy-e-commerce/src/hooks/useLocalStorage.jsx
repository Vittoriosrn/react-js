export const useLocalStorage = () => {

    const setLocalStorage = (id) => {
        localStorage.setItem("product", id)
    }

    const getLocalStorage = () => {
        const products = localStorage.getItem("product")
        return products
    }

    const removeLocalStorage = () => {
        localStorage.removeItem("product")
    }

  return {
    setLocalStorage,
    getLocalStorage,
    removeLocalStorage
  }
}