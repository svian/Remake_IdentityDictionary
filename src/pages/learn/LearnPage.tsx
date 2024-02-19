import { useEffect, useState } from "react";
import Page from "../../components/page/Page";
import axios from "axios";
import { TermPageData } from "../../models/terminology";
import { useParams } from "react-router";
import css from "./LearnPage.module.css";
import TerminologyList from "./terminologyList";

const LearnPage: React.FC = () => {
  const { term } = useParams() as {
    term: string;
  };
  const [pageData, setPageData] = useState<TermPageData>();
  useEffect(() => {
    axios.get("/terminology.json").then((response) => {
      response.data.pages.map((element: TermPageData) => {
        if (element.title === term) {
          setPageData(element);
        }
      });
    });
  });

  return (
    <Page centerContent={false} title={pageData?.title}>
      <div className={css.background}>{pageData?.definition}</div>
      {pageData?.hasList && (
        <>
          <TerminologyList termList={pageData.list || []} />
        </>
      )}
    </Page>
  );
};

export default LearnPage;
