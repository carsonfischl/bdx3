import { sql } from "@vercel/postgres";

export default async function Form({
  params
} : {
  params: { user: string }
}): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * from Pets where owner=${params.user}`;

  return (
    <div>
      <input>
        <label htmlFor="petName">Pet Name</label>
        <input type="text" id="petName" name="petName"></input>

        <label htmlFor="ownerName">Owner Name</label>
        <input type="text" id="ownerName" name="ownerName"></input>

        <button type="submit">Submit</button>
        
      </input>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.quantity}
        </div>
      ))}
    </div>
  );
}