import { Op } from 'sequelize';
import { Request, Response } from 'express';

import { EnergyModel } from '../db';

export const index = async (req: Request, res: Response): Promise<void> => {
  try {
    const { page, pageSize, startTimestamp, endTimestamp } = req.query;

    const _page: number = parseInt(page as string, 10) || 0;
    const _pageSize: number = parseInt(pageSize as string, 10) || 20;

    const offset: number = _page * _pageSize;

    const whereClause = startTimestamp && endTimestamp ? {
      timestamp: {
        [Op.between]: [startTimestamp, endTimestamp],
      },
    } : {};

    await EnergyModel.sync();

    const result: any = await EnergyModel.findAndCountAll({
      where: { ...whereClause },
      offset,
      limit: _pageSize,
    });

    res.json(result);
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).send('Error fetching data');
  }
};