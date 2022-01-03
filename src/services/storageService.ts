const storageService = {
    get(key: string) {
        if (typeof window !== 'undefined') return localStorage.getItem(key);
        return null;
    },
    set(key: string, value: any) {
        if (typeof window !== 'undefined')
            return localStorage.setItem(key, value);
        return null;
    },
    remove(key: string) {
        if (typeof window !== 'undefined') return localStorage.removeItem(key);
        return null;
    },
};

export default storageService;
