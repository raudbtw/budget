import { ListItemText, ListItem, styled, ListItemIcon } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const List = styled(ListItem)`
  display: flex;
  margintop: 10px;
  border: 1px solid #f6f6f6;
`;

const Transaction = ({ transaction, deleteTransaction }) => {
  const sign = transaction.amount >= 0 ? "$" : "-$";
  const amount = sign + Math.abs(transaction.amount);
  const color = transaction.amount >= 0 ? "#1F9D00" : "#A50303";

  return (
    <List
      style={{
        borderRadius: 50,
        marginTop: 10,
        background: `${color}`,
        color: "#fff",
      }}
    >
      <ListItemIcon>
        <DeleteIcon
          style={{ cursor: "pointer" }}
          onClick={() => deleteTransaction(transaction.id)}
        />
      </ListItemIcon>
      <ListItemText primary={transaction.text} />
      <ListItemText primary={amount} />
    </List>
  );
};

export default Transaction;
