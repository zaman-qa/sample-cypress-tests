const moment = require('moment');

const data = () => {
  return [
    {
      model: 'owners',
      refName: 'owner_1',
      data: {
        first_name: 'Jane',
        last_name: 'Doe',
      },
    },
    {
      model: 'renters',
      refName: 'renter_1',
      data: {
        first_name: 'John',
        last_name: 'Doe',
        type: null,
        settings: {
          features: {
            enabled: ['renter_credit'],
            selected: ['renter_credit'],
          },
        },
      },
    },
    {
      model: 'owner_onboardings',
      refName: 'owner_onboardings_1',
      data: {
        owner_id: {
          ref_type: 'ref_field',
          ref_object: 'owner_1',
          ref_field: 'id',
        },
      },
    },
    {
      model: 'listings',
      refName: 'owner_listing_1',
      data: {
        address: `${Date.now()} Test St 123`,
        state: 'TX',
        partial: false,
        owner_id: {
          ref_type: 'ref_field',
          ref_object: 'owner_1',
          ref_field: 'id',
        },
      },
    },
    {
      model: 'leases',
      refName: 'lease1',
      data: {
        listing_id: {
          ref_type: 'ref_field',
          ref_object: 'owner_listing_1',
          ref_field: 'id',
        },
        rent_amount: 100,
      },
    },
    {
      model: 'leases_renters',
      refName: 'leases_renter1',
      data: {
        renter_id: {
          ref_type: 'ref_field',
          ref_object: 'renter_1',
          ref_field: 'id',
        },
        lease_id: {
          ref_type: 'ref_field',
          ref_object: 'lease1',
          ref_field: 'id',
        },
      },
    },

    {
      model: 'stripe_identities',
      refName: 'stripeidentity1',
      data: {
        email: {
          ref_type: 'ref_field',
          ref_object: 'owner_1',
          ref_field: 'email',
        },
        owner_id: {
          ref_type: 'ref_field',
          ref_object: 'owner_1',
          ref_field: 'id',
        },
      },
    },
    {
      model: 'stripe_external_accounts',
      refName: 'stripeexternalaccount1',
      data: {
        stripe_identity_id: {
          ref_type: 'ref_field',
          ref_object: 'stripeidentity1',
          ref_field: 'id',
        },
      },
    },
    {
      model: 'payment_request_rules',
      refName: 'paymentrequestrule1',
      data: {
        lease_id: {
          ref_type: 'ref_field',
          ref_object: 'lease1',
          ref_field: 'id',
        },
        owner_id: {
          ref_type: 'ref_field',
          ref_object: 'owner_1',
          ref_field: 'id',
        },
        category: 'RENT',
        description: 'Test rent',
        amount: 10000,
        type: 'ONE_TIME',
        end_date: moment().subtract(5, 'days').format('YYYY-MM-DD'),
        finalized: true,
      },
    },
    {
      model: 'payment_requests',
      refName: 'paymentrequest1',
      data: {
        lease_id: {
          ref_type: 'ref_field',
          ref_object: 'lease1',
          ref_field: 'id',
        },
        payment_request_rule_id: {
          ref_type: 'ref_field',
          ref_object: 'paymentrequestrule1',
          ref_field: 'id',
        },
        owner_id: {
          ref_type: 'ref_field',
          ref_object: 'owner_1',
          ref_field: 'id',
        },
        payment_request_rule: {
          ref_type: 'ref_object',
          ref_object: 'paymentrequestrule1',
        },
        category: 'RENT',
        description: 'Test rent',
        balance_due: 1500,
        due_date: {
          ref_type: 'ref_field',
          ref_object: 'paymentrequestrule1',
          ref_field: 'end_date',
        },
        amount: 1500,
      },
    },
  ];
};

module.exports = {
  data,
};
