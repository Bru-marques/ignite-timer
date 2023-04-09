import { HistoryContainer, HistoryList, Status } from "./styles";

export function History() {
    return (
        <HistoryContainer>
            <h1>My Cicles</h1>

            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Duration</th>
                            <th>Duration</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        <td>duration</td>
                        <td>Duration</td>
                        <td>status</td>
                        <td>
                            <Status statusColor='green'>Finished</Status>
                        </td>
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    )
}