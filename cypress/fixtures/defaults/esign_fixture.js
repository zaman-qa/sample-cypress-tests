const data = () => {
  return [
    {
      model: 'payment_methods',
      refName: 'payment_method1',
    },
    {
      model: 'owners',
      refName: 'owner1',
      data: {
        first_name: 'Nenad',
        last_name: 'Test',
        customer_id: {
          ref_type: 'ref_field',
          ref_object: 'payment_method1',
          ref_field: 'customer_id',
        },
      },
    },
    {
      model: 'user_payment_methods',
      refName: 'user_payment_method1',
      data: {
        payment_method_id: {
          ref_type: 'ref_field',
          ref_object: 'payment_method1',
          ref_field: 'id',
        },
        owner_id: {
          ref_type: 'ref_field',
          ref_object: 'owner1',
          ref_field: 'id',
        },
        used_for_rent_payments: false,
      },
    },
    {
      model: 'owner_onboardings',
      refName: 'owner_onboardings1',
      data: {
        owner_id: {
          ref_type: 'ref_field',
          ref_object: 'owner1',
          ref_field: 'id',
        },
      },
    },
    {
      model: 'listings',
      refName: 'listing1',
      data: {
        owner_id: {
          ref_type: 'ref_field',
          ref_object: 'owner1',
          ref_field: 'id',
        },
      },
    },
    {
      model: 'renters',
      refName: 'renter1',
      data: {},
    },
    {
      model: 'leases',
      refName: 'lease1',
      data: {
        listing_id: {
          ref_type: 'ref_field',
          ref_object: 'listing1',
          ref_field: 'id',
        },
        rent_amount: 100,
      },
    },
    {
      model: 'leases_renters',
      refName: 'leasesrenters1',
      data: {
        renter_id: {
          ref_type: 'ref_field',
          ref_object: 'renter1',
          ref_field: 'id',
        },
        lease_id: {
          ref_type: 'ref_field',
          ref_object: 'lease1',
          ref_field: 'id',
        },
      },
    },
  ];
};

module.exports = {
  data,
};
