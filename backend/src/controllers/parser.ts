import { RequestHandler } from "express"
// import createHttpError from "http-errors";
import { isValidUrl } from "../utils/validateUrl";
import { fetchData } from "../utils/fetchData";
import { transformObject } from "../utils/transformers";

interface QueryParserBody {
  query?: string;
}

export const parseQuery: RequestHandler<unknown, unknown, QueryParserBody, unknown> = async (req, res, next) => {
  const query = req.body.query;

  try {

    if (!query) {
      res.status(200).json({ raw: "No Query to process.", parsed: null })

    } else {
      if (isValidUrl(query)) {
        const result = await fetchData(query, { method: "GET" });
        const raw = await result.json()

        const parsed = transformObject(raw)


        res.status(200).json({ raw, parsed })

      } else {
        res.status(200).json({ raw: query, parsed: query.toUpperCase() })
      }
    }


  } catch (err) {
    next(err)
  }

}