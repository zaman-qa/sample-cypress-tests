const data = () => {
  return [
    {
      model: 'owners',
      refName: 'owner1',
      data: {
        telephone: null,
        first_name: 'Test',
        last_name: 'Test',
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
        address: `${Date.now()} testing st`,
        partial: true,
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
      },
    },
    {
      model: 'leases_renters',
      refName: 'leases_renter1',
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
