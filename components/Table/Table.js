import styled from "./Table.module.css"
export default function Table() {
    return (
        <div className={styled.wrapper}>
            <h1>Task 2</h1>
            <table>
                <tbody>
                <tr>
                    <th>First Name</th>
                    <td>Yaroslav</td>
                </tr>
                <tr>
                    <th>Last Name</th>
                    <td>Hrishyn</td>
                </tr>
                <tr>
                    <th>Occupation</th>
                    <td>OccName</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}