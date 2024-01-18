import { FormWrapper } from "./FormWrapper";
type AddressData = {
  address: string;
  state: string;
  city: string;
  country: string;
  pincode: string;
};

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

export const AddressForm = ({
  address,
  state,
  city,
  country,
  pincode,
  updateFields,
}: AddressFormProps) => {
  return (
    <FormWrapper title="Address Details">
      <label>Address</label>
      <input
        type="text"
        required
        value={address}
        onChange={(e) => updateFields({ address: e.target.value })}
      />
      <label>State</label>
      <input
        type="text"
        autoFocus
        required
        value={state}
        onChange={(e) => updateFields({ state: e.target.value })}
      />
      <label>City</label>
      <input
        type="text"
        required
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <label>Country</label>
      <input
        type="text"
        required
        value={country}
        onChange={(e) => updateFields({ country: e.target.value })}
      />
      <label>Pincode</label>
      <input
        type="text"
        required
        value={pincode}
        onChange={(e) => updateFields({ pincode: e.target.value })}
      />
    </FormWrapper>
  );
};
