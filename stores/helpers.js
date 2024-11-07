export const loadState = () => {
    const defaultCityName = "";
    try {
        const cityName = localStorage.getItem("cityName");
        if (cityName === null) {
            return defaultCityName;
        }
        return cityName;
    } catch (err) {
        console.error("Error during loading cityName", err);
        return defaultCityName;
    }
};

export const saveState = (cityName) => {
    try {
        localStorage.setItem("cityName", cityName);
    } catch (err) {
        console.error("Error during saving cityName", err);
    }
};

export function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function loadFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}
