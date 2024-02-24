import Mark from "./Mark";

const Accordion = ({row}: {row: any}) => {
  console.log(row)
  const id = row?.id;
  // console.log(id)
  const fullDate = row?.date

  let parts = fullDate.split('-');

  let formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;

  const handleChange = () => {
    // console.log("changed")
  }

  return (
      <div className="collapse collapse-arrow bg-base-200">
        <input type="checkbox" name="my-accordion" />
        <div className="collapse-title text-xl font-medium">{formattedDate}</div>
          <div className="collapse-content">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    {/* <th></th> */}
                    <th>Name</th>
                    <th>Taken</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    {/* <th>1</th> */}
                    <td>Lansoprazole</td>
                    <td>
                      <Mark check={row?.lansoprazole} id={id} col={"lansoprazole"}/>
                    </td>
                    <td>{row?.lansoprazole_time? row?.lansoprazole_time : `Not taken yet` }</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    {/* <th>2</th> */}
                    <td>Buscopan Morning</td>
                    <td>
                    <Mark check={row?.buscopan_morning} id={id} col={"buscopan_morning"}/>
                    </td>
                    <td>{row?.buscopan_morning_time? row?.buscopan_morning_time : `Not taken yet` }</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    {/* <th>3</th> */}
                    <td>Buscopan Afternoon</td>
                    <td>
                    <Mark check={row?.buscopan_afternoon} id={id} col={"buscopan_afternoon"}/>
                    </td>
                    <td>{row?.buscopan_afternoon_time? row?.buscopan_afternoon_time : `Not taken yet` }</td>
                  </tr>
                  <tr>
                    {/* <th>4</th> */}
                    <td>Buscopan Night</td>
                    <td>
                    <Mark check={row?.buscopan_night} id={id} col={"buscopan_night"}/>
                    </td>
                    <td>{row?.buscopan_night_time? row?.buscopan_night_time : `Not taken yet` }</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
      </div>
  );
};

export default Accordion;
