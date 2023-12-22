import { request, gql } from 'graphql-request';

export const MASTER_URL = `https://api-ap-southeast-2.hygraph.com/v2/${process.env.NEXT_PUBLIC_HYGRAPH_KEY}/master`;

const getCourseList = async () => {
  const query = gql`
    query Courses {
      courseLists {
        name
        banner {
          url
        }
        free
        id
        totalChapter
        tag
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

export default getCourseList;