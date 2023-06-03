import axios from "axios";
import store from "../store/store";
import { setHistograms } from "../store/objectSearchData";
const TOKEN = localStorage.getItem("accessToken");

export const instance = axios.create({
  baseURL: "https://gateway.scan-interfax.ru/",
  timeout: 3000,
  headers: { Authorization: `Bearer ${TOKEN}` },
});

export const objectSearch = {
  getData: async (data) => {
    try {
      const response = await instance.post("api/v1/objectsearch/histograms", {
        issueDateInterval: {
          startDate: data.datePickerStart,
          endDate: data.datePickerEnd,
        },
        searchContext: {
          targetSearchEntitiesContext: {
            targetSearchEntities: [
              {
                type: "company",
                sparkId: null,
                entityId: null,
                inn: data.INN,
                maxFullness: data.completeness,
                inBusinessNews: data.businessContext,
              },
            ],
            onlyMainRole: data.mainRole,
            tonality: data.tonality,
            onlyWithRiskFactors: data.riskFactors,
            riskFactors: {
              and: [],
              or: [],
              not: [],
            },
            themes: {
              and: [],
              or: [],
              not: [],
            },
          },
          themesFilter: {
            and: [],
            or: [],
            not: [],
          },
        },
        searchArea: {
          includedSources: [],
          excludedSources: [],
          includedSourceGroups: [],
          excludedSourceGroups: [],
        },
        attributeFilters: {
          excludeTechNews: data.technicalNews,
          excludeAnnouncements: data.announcements,
          excludeDigests: data.summaries,
        },
        similarMode: "duplicates",
        limit: data.quantity,
        sortType: "sourceInfluence",
        sortDirectionType: "desc",
        intervalType: "month",
        histogramTypes: ["totalDocuments", "riskFactors"],
      });
      const resData = response.data.data;
      store.dispatch(setHistograms(resData));
      if (response.status === 200) {
        return true
      } else {
        return false
      }
    } catch (error) {
      console.error(error);
    }
  },
};
