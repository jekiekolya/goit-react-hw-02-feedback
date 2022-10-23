import { Button } from './FeedbackOptions.styled';
import { Box } from '../Box';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log(options, onLeaveFeedback);

  return (
    <Box display="flex" gridGap="10px" mb="20px" mt="20px">
      {options.map(option => {
        option = option.charAt(0).toUpperCase() + option.slice(1);
        return (
          <Button type="button" key={option} onClick={onLeaveFeedback}>
            {option}
          </Button>
        );
      })}
    </Box>
  );
};
