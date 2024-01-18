import { FormWrapper } from "./FormWrapper";

type PersonalData = {
  name: string;
  age: string;
  sex: string;
  mobile: string;
  govtIdType: string;
  govtId: string;
};

type PersonalFormProps = PersonalData & {
  updateFields: (fields: Partial<PersonalData>) => void;
};

export const PersonalDetailsForm = ({
  name,
  age,
  sex,
  mobile,
  govtIdType,
  govtId,
  updateFields,
}: PersonalFormProps) => {
  return (
    <FormWrapper title="Personal Details">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => updateFields({ name: e.target.value })}
      />
      <label htmlFor="age">Age</label>
      <input
        type="text"
        id="age"
        value={age}
        onChange={(e) => updateFields({ age: e.target.value })}
      />
      <label htmlFor="sex">Sex</label>
      <select
        id="sex"
        value={sex}
        onChange={(e) => updateFields({ sex: e.target.value })}
      >
        <option value="">Select</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <label htmlFor="mobile">Mobile</label>
      <input
        type="text"
        id="mobile"
        value={mobile}
        onChange={(e) => updateFields({ mobile: e.target.value })}
      />
      <label htmlFor="idtype">Govt. ID</label>
      <select
        id="idtype"
        value={govtIdType}
        onChange={(e) => updateFields({ govtIdType: e.target.value })}
      >
        <option value="PAN">PAN</option>
        <option value="Aadhar">Aadhar</option>
      </select>
      <label htmlFor="id">Govt Id</label>
      <input
        type="text"
        id="id"
        value={govtId}
        onChange={(e) => updateFields({ govtId: e.target.value })}
      />
    </FormWrapper>
  );
};
