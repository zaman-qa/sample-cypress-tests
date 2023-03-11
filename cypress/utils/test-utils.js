/* eslint-disable no-undef */
const encodeId = (type, id) =>
  Buffer.from(`${type}:${id || ''}`).toString('base64');

const getPlaidIframeId = () => 'plaid-link-iframe-1';

const getPlaidVerifyDepositsIframeId = () => 'plaid-link-iframe-2';

const getStripeIframeName = () => 'stripe_checkout_app';

module.exports = {
  encodeId,
  getPlaidIframeId,
  getStripeIframeName,
  getPlaidVerifyDepositsIframeId,
};
