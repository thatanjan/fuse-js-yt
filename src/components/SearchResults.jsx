import { Box, Grid, Text, VStack } from '@chakra-ui/react'

const SearchResults = ({ searchResults }) => {
	return (
		<Grid gridRowGap='1rem'>
			{searchResults.map(({ first_name, last_name, email }) => (
				<Box
					_hover={{
						background: 'teal.500',
						color: 'white',
						cursor: 'pointer',
					}}
					p='.5rem 1rem'
				>
					<VStack align='start'>
						<Text>
							{first_name} {last_name}
						</Text>
						<Text>{email}</Text>
					</VStack>
				</Box>
			))}
		</Grid>
	)
}

export default SearchResults
