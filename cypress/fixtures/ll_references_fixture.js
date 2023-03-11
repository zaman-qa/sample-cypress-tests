const rentalRequestFixture = require('../fixtures/defaults/rental_requests');

const payload = rentalRequestFixture.defaultRentalRequest();

const timestamp = new Date().getTime();
const landlord_email = `test+ll${timestamp}@turbotenant.com`;

const data = () => {
  return [
    {
      model: 'owners',
      refName: 'owner1',
      data: {
        first_name: 'Nenad',
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
      data: {
        first_name: payload.first_name,
        last_name: payload.last_name,
        email: payload.email,
        updated_at: new Date(),
        created_at: new Date(),
        type: null,
      },
    },
    {
      model: 'rental_requests',
      refName: 'application1',
      data: {
        ...payload,
        listing_id: {
          ref_type: 'ref_field',
          ref_object: 'listing1',
          ref_field: 'id',
        },
        renter_id: {
          ref_type: 'ref_field',
          ref_object: 'renter1',
          ref_field: 'id',
        },
        currentEmployers: [],
        pastEmployers: [],
        notCurrentlyEmployed: true,
        profile_bio: '',
      },
    },
    {
      model: 'residences',
      refName: 'residences1',
      data: {
        rental_request_id: {
          ref_type: 'ref_field',
          ref_object: 'application1',
          ref_field: 'id',
        },
        type: 0,
        start_date: new Date(2001, 1, 1),
        address: '1234 auto test ave',
        city: 'automated test city',
        stateOption: 29,
        zip: '80526',
        reason_for_moving: '',
        landlord_name: 'landlord_automated_name',
        landlord_phone: '0000000002',
        landlord_email,
      },
    },
    {
      model: 'residences',
      refName: 'residences2',
      data: {
        rental_request_id: {
          ref_type: 'ref_field',
          ref_object: 'application1',
          ref_field: 'id',
        },
        type: 0,
        start_date: new Date(2001, 1, 1),
        address: '1234 auto test past ave',
        city: 'automated test past city',
        stateOption: 28,
        zip: '80527',
        reason_for_moving: '',
        landlord_name: 'landlord automated past name',
        landlord_phone: '0000000003',
        landlord_email,
      },
    },
    {
      model: 'co_applicants',
      refName: 'coApplicant1',
      data: {
        rental_request_id: {
          ref_type: 'ref_field',
          ref_object: 'application1',
          ref_field: 'id',
        },
        name: 'co app one',
        email: `test+coapp${timestamp}@turbotenant.com`,
      },
    },
    {
      model: 'payments',
      refName: 'payment1',
      data: {
        rental_request_id: {
          ref_type: 'ref_field',
          ref_object: 'application1',
          ref_field: 'id',
        },
        amount: 3500,
        charge_id: 'ch_moked_charge_id',
        source: {
          id: 'card_1HG3zGKTFJkLeHsPsjezUXXL',
          name: payload.email,
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
          ref_object: 'renter1',
          ref_field: 'id',
        },
        owner_id_back: {
          ref_type: 'ref_field',
          ref_object: 'listing1',
          ref_field: 'owner_id',
        },
        payer_type: 'RENTER',
        metadata: {
          email: payload.email,
          listing_id: {
            ref_type: 'ref_field',
            ref_object: 'listing1',
            ref_field: 'id',
          },
          payer_type: 'RENTER',
          renterName: 'automated testApplicant',
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
