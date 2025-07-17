import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuditLog } from './entities/audit-log.entity';

@Injectable()
export class AuditService {
  constructor(
    @InjectRepository(AuditLog)
    private auditRepository: Repository<AuditLog>,
  ) {}

  async log(action: string, userId: number, details?: string) {
    const log = this.auditRepository.create({ action, userId, details, timestamp: new Date() });
    return this.auditRepository.save(log);
  }
} 