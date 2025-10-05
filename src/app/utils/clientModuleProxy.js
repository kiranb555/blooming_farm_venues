/**
 * createClientModuleProxy - Creates a proxy for client-side modules with error handling and logging
 * @param {Object} module - The module to create a proxy for
 * @param {string} moduleName - The name of the module (for error messages)
 * @param {Object} options - Configuration options
 * @param {boolean} options.logCalls - Whether to log method calls (default: false)
 * @param {boolean} options.suppressErrors - Whether to suppress errors (default: false)
 * @returns {Proxy} A proxy object that wraps the module
 */
const createClientModuleProxy = (module, moduleName = 'Module', options = {}) => {
  const { logCalls = false, suppressErrors = false } = options;

  return new Proxy(module, {
    get(target, prop) {
      const original = target[prop];

      // Return the property if it's not a function
      if (typeof original !== 'function') {
        return original;
      }

      // Return a new function that wraps the original method
      return function (...args) {
        try {
          if (logCalls) {
            console.log(`[${moduleName}] Calling ${prop} with args:`, args);
          }
          
          const result = original.apply(this, args);
          
          // Handle promises
          if (result && typeof result.then === 'function') {
            return result.catch(error => {
              console.error(`[${moduleName}] Error in ${prop}:`, error);
              if (!suppressErrors) throw error;
              return null;
            });
          }
          
          return result;
        } catch (error) {
          console.error(`[${moduleName}] Error in ${prop}:`, error);
          if (!suppressErrors) throw error;
          return null;
        }
      };
    },
    set(target, prop, value) {
      if (logCalls) {
        console.log(`[${moduleName}] Setting ${prop} to:`, value);
      }
      target[prop] = value;
      return true;
    }
  });
};

export default createClientModuleProxy;
