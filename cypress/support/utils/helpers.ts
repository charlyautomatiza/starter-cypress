/**
 * Utility functions for test automation
 */

/**
 * Generate random string
 */
export const randomString = (length: number = 10): string => {
  return Math.random().toString(36).substring(2, length + 2);
};

/**
 * Generate random email
 */
export const randomEmail = (domain: string = 'test.com'): string => {
  return `user_${randomString(8)}@${domain}`;
};

/**
 * Generate random number within range
 */
export const randomNumber = (min: number = 0, max: number = 100): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Format date to YYYY-MM-DD
 */
export const formatDate = (date: Date = new Date()): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 * Wait for a specific condition with timeout
 */
export const waitForCondition = (
  conditionFn: () => boolean,
  timeout: number = 5000,
  interval: number = 100
): Promise<void> => {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    
    const checkCondition = () => {
      if (conditionFn()) {
        resolve();
      } else if (Date.now() - startTime > timeout) {
        reject(new Error('Timeout waiting for condition'));
      } else {
        setTimeout(checkCondition, interval);
      }
    };
    
    checkCondition();
  });
};

/**
 * Deep clone an object
 */
export const deepClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

/**
 * Generate test data
 */
export const generateTestUser = () => {
  return {
    username: randomString(10),
    email: randomEmail(),
    password: `Pass${randomNumber(1000, 9999)}!`,
    age: randomNumber(18, 80),
    createdAt: formatDate(),
  };
};

/**
 * Retry a function multiple times
 */
export const retry = async <T>(
  fn: () => Promise<T>,
  retries: number = 3,
  delay: number = 1000
): Promise<T> => {
  try {
    return await fn();
  } catch (error) {
    if (retries === 0) throw error;
    await new Promise(resolve => setTimeout(resolve, delay));
    return retry(fn, retries - 1, delay);
  }
};
