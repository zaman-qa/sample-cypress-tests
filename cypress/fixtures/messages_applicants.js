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
        partial: true,
        owner_id: {
          ref_type: 'ref_field',
          ref_object: 'owner_1',
          ref_field: 'id',
        },
      },
    },
    {
      model: 'rental_requests',
      refName: 'application_1',
      data: {
        first_name: {
          ref_type: 'ref_field',
          ref_object: 'renter_1',
          ref_field: 'first_name',
        },
        last_name: {
          ref_type: 'ref_field',
          ref_object: 'renter_1',
          ref_field: 'last_name',
        },
        email: {
          ref_type: 'ref_field',
          ref_object: 'renter_1',
          ref_field: 'email',
        },
        listing_id: {
          ref_type: 'ref_field',
          ref_object: 'owner_listing_1',
          ref_field: 'id',
        },
        renter_id: {
          ref_type: 'ref_field',
          ref_object: 'renter_1',
          ref_field: 'id',
        },
        completed_at: new Date(),
        agree_to_terms: true,
      },
    },
    {
      model: 'payments',
      refName: 'payment_1',
      data: {
        rental_request_id: {
          ref_type: 'ref_field',
          ref_object: 'application_1',
          ref_field: 'id',
        },
        amount: 4500,
        charge_id: 'ch_moked_charge_id',
        source: {
          id: 'card_1HG3zGKTFJkLeHsPsjezUXXL',
          name: {
            ref_type: 'ref_field',
            ref_object: 'renter_1',
            ref_field: 'email',
          },
          brand: 'Visa',
          last4: '4242',
          object: 'card',
          country: 'US',
          funding: 'credit',
          customer: null,
          exp_year: 2024,
          metadata: {},
          cvc_check: 'pass',
          exp_month: 9,
          address_zip: '09090',
          fingerprint: 'KGu6XTKEHO6aUQz8',
          address_city: null,
          address_line1: null,
          address_line2: null,
          address_state: null,
          dynamic_last4: null,
          address_country: null,
          address_zip_check: 'pass',
          address_line1_check: null,
          tokenization_method: null,
        },
        renter_id: {
          ref_type: 'ref_field',
          ref_object: 'renter_1',
          ref_field: 'id',
        },
        owner_id_back: {
          ref_type: 'ref_field',
          ref_object: 'owner_1',
          ref_field: 'id',
        },
        payer_type: 'RENTER',
        metadata: {
          email: `test+${Date.now()}${Math.floor(
            Math.random() * 1000,
          )}@turbotenant.com`,
          payer_type: 'RENTER',
          renterName: 'John Doe',
          product_line: 'Online Application',
          listing_address: '125 Astronomer Way Edited',
          rental_request_id: 'from unit test',
        },
        updated_at: new Date(),
        created_at: new Date(),
      },
    },
  ];
};

module.exports = {
  data,
};
