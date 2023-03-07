import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"

export const JournalPage = () => {
  return (
    <JournalLayout>
      
      {/* <Typography>Sit commodo laborum Lorem exercitation aliquip tempor consequat Lorem sunt mollit irure id excepteur. Incididunt excepteur occaecat deserunt dolor nulla commodo quis pariatur incididunt consequat officia ex. Qui ullamco et proident dolore ex. Duis veniam minim reprehenderit nulla sint ipsum aute. Minim eu excepteur occaecat quis culpa. Et id excepteur ad nulla voluptate deserunt consectetur commodo ea irure. Mollit in laboris mollit est adipisicing excepteur magna elit aute magna.</Typography> */}

      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

    </JournalLayout>
  )
}
