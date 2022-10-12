// API
import API from './api/index';
export * as API from './api/index';

// Types
import * as typechain from './typechain';
export * from './typechain';

const SDK = { API, typechain };

export default SDK;
