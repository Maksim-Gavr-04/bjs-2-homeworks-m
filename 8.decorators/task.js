// Задача 1 (Усовершенствовать кеширующий декоратор):
function cachingDecoratorNew(func) {
  let cache = [];
  
  function wrapper(...args) {
    const hash = md5(args);
    const objectInCache = cache.find(obj => obj.hash === hash);
    if (objectInCache) {
      console.log("Из кеша: " + objectInCache.value);
      return "Из кеша: " + objectInCache.value;
    }

    const value = func(...args);
    cache.push({ hash, value });
    
    if (cache.length > 5) {
      cache.shift();
    }
    
    console.log("Вычисляем: " + value);
    return "Вычисляем: " + value; 
  }

  return wrapper;
}

// Задача 2 (Debounce декоратор с моментальным вызовом и подсчётом количества вызовов):
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;

  function wrapper(...args) {
    wrapper.allCount++;

    if (!timeoutId) {
      func(...args);
      wrapper.count++;
    }

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func(...args);
      wrapper.count++;
    }, delay);
  }

  return wrapper;
}