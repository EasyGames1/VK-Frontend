export default class Database {
    static open(name) {
        const base = indexedDB.open(name, 1);
        base.onsuccess = () => {
            base.result.onversionchange = () => {
                base.result.close();
                window.location.reload();
            };
            return base.result;
        };
        base.onblocked = () => {
            return null;
        };
        base.onerror = () => {
            return null;
        };
    };
    static add(name, object, key) {
        const base = this.open(name);
        base.onupgradeneeded = () => {
            const db = base.result;
            if (!db.objectStoreNames.contains(object)) {
                db.createObjectStore(object, { keyPath: 'id', autoIncrement: true });
            };
            const transaction = db.transaction(object, 'readwrite');
            const objects = transaction.objectStore(object);
            const request = objects.add(key);

            request.onsuccess = () => {
                console.log("Объект успешно добавлен в хранилище.", request.result);
            };
            request.onerror = () => {
                console.log(`Ошибка ${request.error}`)
            };

            transaction.oncomplete = () => {
                console.log('Транзакция успешно завершена.');
            };
        };
    };

    static deleteObject(name, object) {
        this.open(name).deleteObjectStore(object);
    };

    static delete(name) {
        const base = indexedDB.deleteDatabase(name);
        base.onsuccess = () => {
            console.log(`База данных ${name} успешно удалена`);
        };
        base.onerror = () => {
            console.log(`Не удалось удалить базу данных ${name}`);
        };
    };
};