import React from 'react'
import {
  createStyles,
  Divider,
  List,
  Paper,
  Theme,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { MaterialsListProps } from '../../types/components.types'
import { MaterialsListItem } from './MaterialListItem'

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    list: {
      width: '100%',
      maxWidth: 1000,
      marginBottom: spacing(2),
    },
  })
)

export const MaterialsList: React.FC<MaterialsListProps> = props => {
  const { data, title } = props
  const classes = useStyles()

  return (
    <>
      <Typography variant="h6" component="h6" align="center" gutterBottom>
        {title}
      </Typography>
      <List className={classes.list} component={Paper} elevation={2}>
        {data.map((m, idx, arr) => (
          <React.Fragment key={m.title}>
            <MaterialsListItem {...m} />
            {idx !== arr.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </>
  )
}
